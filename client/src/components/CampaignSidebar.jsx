import React from 'react';
import { Button } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CampaignSidebar({title, category, targetAmount, raisedAmount}) {
    return ( 
        <>
            <div>
                            <h2>{title}</h2>
                            <p><strong>Category: </strong>{category}</p>
                            <div className="d-flex justify-content-between align-items-center border rounded mb-3">                        
                            <div className='m-4'>
                                <p><strong>Target:</strong> ₹{targetAmount}</p>
                                <p><strong>Raised:</strong> ₹{raisedAmount || 0}</p>
                            </div>

                            <div className='m-4 p-1' style={{width: '100px', height: '100px'}}>
                                <CircularProgressbar 
                                value={56} 
                                text='56%' 
                                styles={buildStyles({
                                textColor: "#198754",
                                pathColor: "#198754",
                                trailColor: "#eee"
                            })}/>    
                            </div>
                            </div>
                            <div className="my-3 d-grid gap-2">
                                <Button 
                                    variant="outline-secondary" 
                                    className="py-2 fs-5 rounded-pill"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                                    </svg> Share Campaign
                                </Button>

                                <Button 
                                    variant="success" 
                                    className="py-2 fs-5 rounded-pill text-white shadow d-inline-block align-items-center g-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                                    </svg> Donate Now
                                </Button>
                            </div>
                        </div>
        </>
     );
}

export default CampaignSidebar;