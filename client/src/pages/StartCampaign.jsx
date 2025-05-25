import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap';
import { createCampaign } from '../services/api';


function StartCampaign () {

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        shortDesc: "",
        story: "",
        category: "",
        targetAmount: "",
        endDate: "",
        image: null,
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if(name === "image"){
            setFormData({ ...formData, [name] : files[0]});
        } else{
            setFormData({ ...formData, [name]: value});
        }
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const steps = [
        {
            label: "Start your fundraising adventure with us.",
            subLabel: "We're here to support and guide you every step of the way!",
        },
        {
          label: "Give your campaign a name that will inspire support.",
          subLabel: "This is the first thing people will see, so make it count!",
          name: "title",
          type: "text",
          placeholder: "Enter campaign title",
        },
        {
          label: "Write a short description.",
          subLabel: " A clear, concise description will help potential donors understand why they should care.",
          name: "shortDesc",
          type: "text",
          placeholder: "E.g. Help us build a community library",
        },
        {
          label: "Share your full story",
          subLabel: " Let people know the why behind your campaign.",
          name: "story",
          type: "textarea",
          placeholder: "Write your story here...",
        },
        {
          label: "Choose a category that best represents your cause.",
          subLabel: " This helps us match your campaign with like-minded supporters.",
          name: "category",
          type: "select",
          options: ["Education", "Medical", "Business", "Environment", "Other"],
        },
        {
          label: "Set your fundraising goal.",
          subLabel: "This is the amount you aim to raise feel free to adjust it as your campaign grows!",
          name: "targetAmount",
          type: "number",
          placeholder: "E.g. 50000",
        },
        {
          label: "Pick the date your campaign will end",
          subLabel: "This gives your donors a sense of urgency and allows you to set a clear timeline for success.",
          name: "endDate",
          type: "date",
        },
        {
          label: "Upload a banner that will catch people’s attention",
          subLabel: "This is your campaign’s visual identity, so make it stand out!",
          name: "image",
          type: "file",
        },
        {
            label: "Preview your campaign before submission",
            subLabel: "Make sure everything looks good!",
            preview : true,
        },
      ];

    const current = steps[step];

    const isCurrentStepValid = () => {
        const currentField = steps[step];
        if(!currentField.name) return true

        const value = formData[currentField.name]

        if(currentField.type === "file") {return !!value}

        if(currentField.name === "targetAmount"){
            const amount = parseFloat(value);
            return !isNaN(amount) && amount > 0
        }

        if(currentField.name === "endDate"){
            const today = new Date();
            const selectedDate = new Date(value);

            today.setHours(0, 0, 0, 0)
            selectedDate.setHours(0, 0, 0, 0)
            return selectedDate > today;
        }

        return value !== "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title)
        data.append("shortDesc", formData.shortDesc)
        data.append("story", formData.story)
        data.append("category", formData.category)
        data.append("targetAmount", formData.targetAmount)
        data.append("endDate", formData.endDate)
        data.append("image", formData.image)

        try {
            const response = await createCampaign(data)

            if(response.data.message){
                setSuccessMessage(response.data.message)
                setErrorMessage('')
            }

            if(response.data.error){
                setErrorMessage(response.data.error)
                setSuccessMessage('')
            }

        } catch (error) {
            setErrorMessage(error.response?.data?.error || "Something went wrong")
            setSuccessMessage('')
        }
    };

    const previewUrl = useMemo(() => {
        return formData.image? URL.createObjectURL(formData.image) : null;
    }, [formData.image])

    useEffect(() => {
        return () => {
            if(previewUrl){
                URL.revokeObjectURL(previewUrl)
            }
        };
    }, [previewUrl])

    return ( 
            <Container className='my-4 rounded' style={{maxWidth: "900px"}}>
                {successMessage && (
                    <Alert variant='success' onClose={() => setSuccessMessage('')} dismissible>
                        {successMessage}
                    </Alert>
                )}

                {errorMessage && (
                    <Alert variant='danger' onClose={() => setErrorMessage('')} dismissible>
                        {errorMessage}
                    </Alert>
                )}

                <Form encType="multipart/form-data">

                    <Form.Group className='mb-3 mx-4 py-5'>
                        <div className='text-secondary'>
                            <Form.Label>Step {step + 1} of  Step {steps.length}</Form.Label>
                        </div>
                        <Form.Label className='fw-bold text-success mb-3 fs-1'>{current.label}</Form.Label>
                        <small className='text-muted d-block mb-3'>{current.subLabel}</small>
                    {current.preview ? (
                            <Form.Group>
                                <div className="p-4">
                                    <Card>
                                        <Row className='g-2'>
                                            <Col md={12}>
                                                <CardBody className='p-4'>
                                                <img src={previewUrl} alt="preview" className='card-img-top mb-4'/>
                                                    <div className='d-flex justify-content-between mb-3'>
                                                        <div className="">
                                                            <CardTitle>{formData.title}</CardTitle>
                                                            <CardSubtitle>{formData.shortDesc}</CardSubtitle>
                                                            <CardText><small>{formData.category}</small></CardText>
                                                        </div>
                                                        <div>
                                                            <CardText>Valid till: {formData.endDate}</CardText>
                                                        </div>
                                                    </div>
                                                    
                                                    <CardText>{formData.story}</CardText>
                                                    <CardText><strong>Goal Amount:</strong> {formData.targetAmount}</CardText>
                                                    
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            </Form.Group>
                    ) : (step > 0 ? (                  
                        current.type === "textarea" ? (
                            <Form.Control 
                                as="textarea"
                                rows={4}
                                name={current.name}
                                value={formData[current.name] || ""}
                                onChange={handleChange}
                                placeholder={current.placeholder}
                                required
                            />
                        ) : current.type === "select" ? (
                            <Form.Select name={current.name} onChange={handleChange} value={formData[current.name]} className='py-3' required>
                                <option value="">Select a Category</option>
                                {current.options.map((opt, idx) => (
                                    <option key={idx} value={opt}>{opt}</option>
                                ))}
                            </Form.Select>
                        ) : current.type === "file" ? (
                            <Form.Control
                                type="file"
                                name={current.name}
                                onChange={handleChange}
                                className='py-3'
                                required
                            />
                        ) : (
                            <Form.Control
                                type={current.type}
                                name={current.name}
                                value={formData[current.name] || ""}
                                onChange={handleChange}
                                placeholder={current.placeholder}
                                required
                                className='py-3'
                            />
                        )
                        ): (
                            <></>
                        ))}
                    </Form.Group>

                    <ProgressBar 
                    now={((step) / steps.length) * 100} 
                    className='mb-4' 
                    variant='success'
                    style={{ height: '2px', borderRadius: '5px' }}
                />

                    <div className="d-flex justify-content-between mb-4 mx-4 py-4">
                        <Button variant='dark' className='py-2 fs-5' onClick={prevStep} disabled={step === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                             <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                        </svg>
                        Back

                        </Button>
                        {step === 0 ? (
                            <Button variant='success' className='py-2 fs-5' onClick={nextStep} disabled = {!isCurrentStepValid()}>
                                Click here to Start
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className ="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                            </Button>
                        ) : step < steps.length - 1 ? (
                            <Button variant='outline-success' className='py-2 fs-5' onClick={nextStep} disabled = {!isCurrentStepValid()}>
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className ="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                            </Button>
                        ) : (
                            <Button variant='success' className='py-2 fs-5' onClick={handleSubmit} disabled={!isCurrentStepValid()}>
                                Submit
                            </Button>
                        )}
                    </div>
                </Form>
            </Container>
     );
}

export default StartCampaign ;

