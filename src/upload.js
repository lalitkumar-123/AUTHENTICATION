import React, { useState } from "react";
import { Card,Form } from "react-bootstrap";
import { storage } from "./firebase.js";
import {Link} from 'react-router-dom';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  return (
    <>
      <Card style={{margin:"auto", border:"2px solid black", marginTop:"5%", minWidth:"300px", width:"35%",padding:"10px"}}>
          <Card.Body>
            <Form onSubmit={handleUpload}>
            <Form.Control type="file" onChange={handleChange} />
            <button style={{marginTop:"20px"}} disabled={!file}>upload to firebase</button>
            </Form>
            {url && <img src={url} alt="" width="40%" height="40%"/>}
          </Card.Body>
          <Link to="/xmeme.js">XMEME</Link>
      </Card>
    </>
  );
}