import React , {useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {Useauth} from './authcontext.js';
import {Card,Form,Button,Alert} from 'react-bootstrap';

function Update() {
    const emailref = useRef();
    const [error,seterror] = useState();
    const [errorr,seterrorr] = useState();
    const {resetpassword} = Useauth();
    const [load,setload] = useState(false);

    async function submit(e)
    {
        e.preventDefault();
        seterrorr("");
        seterror("");
        try{
            setload(true);
            await resetpassword(emailref.current.value);
            seterrorr("Check your mail!!");
        }catch{
            seterror("Wrong email entered!!");
        }
        setload(false);
    }

    return (
            <>
                <Card style={{margin:"auto", border:"2px solid black", marginTop:"5%", minWidth:"300px", width:"35%",padding:"10px"}}>
                    <Card.Body style={{width:"75%", margin: "auto"}}>
                    <Form onSubmit={submit}>
                        <h1 style={{textAlign:"center"}}>Reset Password</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {errorr && <Alert variant="success">{errorr}</Alert>}
                        <Form.Group id="email">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="email" ref={emailref} required></Form.Control>
                        </Form.Group>
                        <Button disabled={load} style={{marginTop: "10px", width:"100%"}} type="submit">Reset</Button>
                    </Form>
                    <div style={{textAlign:"center"}}>
                        Already have an account ? <Link to='/login'>Login</Link>
                    </div>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Update;