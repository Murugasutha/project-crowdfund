import React from "react";

import { Container } from "react-bootstrap";

function Test() {

    const token = localStorage.getItem('token');

    return (
        <Container>
            {token && (
                <div>
                    <h1>Testing Login.....</h1>
                    <p>Your token is: {token}</p>
                </div>
            )}
        </Container>
    )
}

export default Test;