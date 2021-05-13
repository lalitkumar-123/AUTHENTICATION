import React from 'react';
import {Card,Button,Form} from 'react-bootstrap';

export default function xmeme() {
    return (
        <>
        <Card  style={{margin:"auto", border:"2px solid black", marginTop:"5%", minWidth:"300px", width:"35%",padding:"10px"}}>
            <Card.Body>
                <h1 className="mt-2 text-center">XMEME</h1>
                <Form>
                    <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Caption:</Form.Label>
                    <Form.Control type="text" required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Url:</Form.Label>
                    <Form.Control type="text" required></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary mt-2 w-100">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}
