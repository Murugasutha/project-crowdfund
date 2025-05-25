const express = require("express")
const router = express.Router()
const Campaign = require('../models/Campaign');
const multer = require('multer')
const path = require('path');
const {v4: uuidv4} = require('uuid');

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
    const newCampaign = new Campaign({
        title: params.title,
        shortDesc: params.shortDesc,
        story: params.story,
        category: params.category,
        targetAmount: params.targetAmount,
        endDate: params.endDate,
        imgURL: `/uploads/${params.image}`
    });

    await newCampaign.save();
    return {message: "Campaign created successfully", newCampaign};
}


//Post route for create-campaign
router.post('/create-campaign', upload.single('image'), async (req, res) => {
    try {
        const {title, shortDesc, story, category, targetAmount, endDate} = req.body;
        // const image = req.file?.filename

        const amount = parseFloat(targetAmount);

        if(!title || !shortDesc || !story || !category || !targetAmount || !endDate || !req.file){
           return res.status(400).json({error: "All fields are required" })
        }

        if(isNaN(amount) || amount <= 0){
            return res.status(400).json({error: "Target Amount must be positive number."})
        }

        const image = req.file.filename

        let result = await createNewCampaign({title, shortDesc, story, category, targetAmount: amount, endDate, image})
        res.status(201).json(result);
        
    } catch (error) {
        console.error("Error creating campaign:", error);
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