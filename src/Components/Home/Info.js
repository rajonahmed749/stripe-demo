import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"


const Info = () => {
    const [smShow, setSmShow] = useState(false);
    return (
        <div>
            <Button variant="light" onClick={() => setSmShow(true)}>test info</Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <p>Card Number: 4242 4242 4242 4242</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Info;