import React, { useRef , useState } from 'react';
import {Card,Form,Button,Alert} from 'react-bootstrap';
import {Useauth} from './authcontext.js';
import {Link,useHistory} from 'react-router-dom';

function Signup ()
{
    const emailref = useRef();
    const passwordref = useRef();
    const confirmpasswordref = useRef();
    const {signup} = Useauth();
    const [error, seterror] = useState("");
    const [load, setload] = useState(false);
    const history = useHistory();

    async function submit(e)
    {
        e.preventDefault();
        if(passwordref.current.value!==confirmpasswordref.current.value)
        {
            return seterror("Password doesnot match");
        }

        try {
            seterror("");
            setload(true);
            await signup(emailref.current.value,passwordref.current.value);
            history.push("/");
        }
        catch
        {
            seterror("Failed to create an account");
        }

        setload(false);
    }

        return (
            <>
                <Card style={{margin:"auto", border:"2px solid black", marginTop:"5%", minWidth:"300px", width:"35%",padding:"10px"}}>
                    <Card.Body style={{width:"75%", margin: "auto"}}>
                    <Form onSubmit={submit}>
                        <h1 style={{textAlign:"center"}}>Sign Up</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group id="email">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="email" ref={emailref} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" ref={passwordref} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="confirmpassword">
                            <Form.Label >Confirm Email</Form.Label>
                            <Form.Control type="password" ref={confirmpasswordref} required></Form.Control>
                        </Form.Group>
                        <Button disabled={load} style={{marginTop: "10px", width:"100%"}} type="submit">Sign Up</Button>
                    </Form>
                    <div style={{textAlign:"center"}}>
                        Already have an account ? <Link to='/login'>Login</Link>
                    </div>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Signup;