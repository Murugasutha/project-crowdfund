import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getUserCampaign } from '../services/api';
import CampaignList from '../components/CampaignList';

function MyCampaign() {

    const [campaigns, setCampaigns] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await getUserCampaign()
                setCampaigns(response.data)
            } catch (error) {
                console.log("Error in fetching user Campaign: ", error.message)
                setCampaigns([])
            } finally{
                setTimeout(() => setLoader(false), 1000);
            }
        }

        fetchCampaigns()
    }, [])

    return ( 
        <>
            <Container>
                <h1>My Campaigns</h1>
                
                <CampaignList campaigns={campaigns} loader={loader}/>
            </Container>
        </>
     );
}

export default MyCampaign;