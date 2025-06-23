const express = require("express")
const router = express.Router()
const Campaign = require('../models/Campaign');
const multer = require('multer')
const path = require('path');
const {v4: uuidv4} = require('uuid');
const  protect = require("../middleware/authMiddleware");

//Multer storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueName = uuidv4() + ext;
        cb(null, uniqueName)
    }
})

const upload = multer({storage: storage})


// Helper function for create-campagin

async function createNewCampaign(params) {
    console.log("new campaign params: ", params)
    const newCampaign = new Campaign({
        title: params.title,
        shortDesc: params.shortDesc,
        story: params.story,
        category: params.category,
        targetAmount: params.targetAmount,
        endDate: params.endDate,
        imgURL: `/uploads/${params.image}`,
        createdBy: params.createdBy
    });

    await newCampaign.save();
    return {message: "Campaign created successfully", newCampaign};
}


//Post route for create-campaign
router.post('/create-campaign', protect, upload.single('image'), async (req, res) => {
    try {
        const {title, shortDesc, story, category, targetAmount, endDate} = req.body;
        // const image = req.file?.filename

        if(!title || !shortDesc || !story || !category || !targetAmount || !endDate || !req.file){
           return res.status(400).json({error: "All fields are required" })
        }
        
        const amount = parseFloat(targetAmount);

        if(isNaN(amount) || amount <= 0){
            return res.status(400).json({error: "Target Amount must be positive number."})
        }

        const image = req.file.filename

        let result = await createNewCampaign({title, shortDesc, story, category, targetAmount: amount, endDate, image, createdBy: req.user._id})
        res.status(201).json(result);
        
    } catch (error) {
        console.error("Error creating campaign:", error);
        res.status(500).json({error: error.message})
    }
})

router.get('/my-campaigns', protect, async (req, res) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get search items 

async function getCampaignByQuery(query, sortOption){
    const campaign = await Campaign.find(query).sort(sortOption);
    return campaign
}

router.get('/search', async (req, res) => {
    const {title, category, sortBy} = req.query;

    const query = {}
    if(category) query.category = category;
    if(title) query.title = { $regex: title, $options: 'i'};

    const sortOption = {};

    if(sortBy === 'newest') sortOption.createdAt = -1;
    else if(sortBy === 'oldest') sortOption.createdAt = 1;
    else if(sortBy === 'amount_asc') sortOption.targetAmount = 1;
    else if(sortBy === 'amount_desc') sortOption.targetAmount = -1;

    try {
        let result = await getCampaignByQuery(query, sortOption)
        if(result.length === 0) res.status(404).json({message: "No Campaigns found."})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Get all campaigns

async function getAllCampaigns(){
    const campaign = await Campaign.find().sort({ createdAt: -1 })
    return campaign
}

router.get('/', async (req, res) => {
    try {
        let result = await getAllCampaigns()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})


//Get campaigns by id

async function getCampaignsById(id){
    const campaign = await Campaign.findById(id);
    if(!campaign) return {message: "Campaign not found"}
    return campaign
}

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let result = await getCampaignsById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

module.exports = router;