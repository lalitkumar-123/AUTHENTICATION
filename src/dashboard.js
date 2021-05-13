import React , { useState } from 'react';
import {Card,Alert,Button} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import {Useauth} from './authcontext.js';

function Dashboard() {
    const [error,seterror] = useState();
    const {logout,currentuser} = Useauth();
    const history = useHistory();

    async function Logout()
    {
        seterror("");
        try{
            await logout();
            history.push("/login");
        }
        catch{
            seterror("Fail to logout");
        }
    }

    return (
        <>
        <Card style={{margin:"auto", marginTop:"30px", textAlign:"center", width:"40%", height:"50%"}}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card.Body>
                <div>
                    <h1>Profile</h1>
                    <strong>Email:</strong>{currentuser.email}
                </div>
                <Link to='/update' className="btn btn-primary mt-4">Update</Link>
            </Card.Body>
        </Card>
        <div style={{textAlign:"center"}}>
            <Button variant='link' onClick={Logout}>Logout</Button>
        </div>
        </>
    )
}

export default Dashboard;
