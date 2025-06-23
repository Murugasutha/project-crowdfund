import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { getAllCampaigns, searchCampaign } from '../services/api';
import CampaignList from '../components/CampaignList';
import SearchBar from '../components/SearchBar';
import SelectFilter from '../components/SelectFilter';

function CampaignPage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [campaigns, setCampaigns] = useState([])
    const [loader, setLoader] = useState(false)

    const sortOptions = [
        {value: "", label: "Sort By"},
        {value: "newest", label: "Newest"},
        {value: "oldest", label: "Oldest"},
        {value: "amount_desc", label: "Highest Target Amount"},
        {value: "amount_asc", label: "Lowest Target Amount"},
    ]

    const categoryOptions = [
        {value: "", label: "All Categories",},
        { value: 'Education', label: 'Education' },
        { value: 'Medical', label: 'Medical' },
        { value: 'Business', label: 'Business' },
        { value: 'Environment', label: 'Environment' },
        { value: 'Other', label: 'Other' },
    ];

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    const fetchAllCampaigns = async () => {
        setLoader(true)
        try {
            const response = await getAllCampaigns()
            setCampaigns(response.data);
        } catch (error) {
            console.log('Error fetching campaigns: ', error);
            setCampaigns([])
            setLoader(false)
        }

        setTimeout(() => setLoader(false), 1000);
    };

    const  handleSearch = async () => {
        try {
            const params = {}
            if(searchTerm) params.title = searchTerm
            if(category) params.category = category
            if(sortBy) params.sortBy = sortBy
            const response = await searchCampaign(params)
            setCampaigns(response.data)

        } catch (error) {
            console.log('Error in fetching data: ', error)
            setCampaigns([])
        }
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if(searchTerm || category || sortBy){
                handleSearch()
            }else{
                fetchAllCampaigns();
            }
        }, 500);

        return () => clearTimeout(delayDebounce)
    }, [searchTerm, category, sortBy]);

    
    
    const handleReset = () => {
        setSearchTerm('')
        setCategory('')
        setSortBy('')

        fetchAllCampaigns();
    }

    return ( 
        <>
        <Container>
            <div className='mb-5 text-center px-2 py-5 mt-5' data-aos="fade-down">
                <h1 className="fw-bold py-2 my-2" data-aos="fade-down" data-aos-duration="1500"> 
                    <span className="text-success">Discover the Campaign </span>
                    <span>That Inspire</span>
                </h1>
                <p className="my-3 fs-5 py-2">
                    Find meaningful projects to support
                </p>
                <Row className='py-3 mx-5'>
                    <Col md={12}>
                        <SearchBar placeholder = "Search by title..." searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} onSearch={handleSearch}/>
                    </Col>
                </Row>

                <Row className='justify-content-center align-items-center mb-4'>
                    <Col md={4} xs={12} className='mb-3 mb-md-0'>
                        <SelectFilter value={category} onChange={handleCategory} options={categoryOptions}/>
                    </Col>

                    <Col md={4} xs={12} className='mb-3 mb-md-0'>
                        <SelectFilter value={sortBy} onChange={handleSortBy} options={sortOptions}/>
                    </Col>

                    <Col md={2} xs={12} className='mb-3 mb-md-0'>
                        <Button variant='dark' className='fs-5 py-2' onClick={handleReset}>Reset Filter</Button>
                    </Col>
                </Row>
            </div>

            <CampaignList campaigns={campaigns} loader={loader}/>
        </Container>
        </>
     );
}

export default CampaignPage;