import React from 'react';
import {Link} from 'react-router-dom';

export default function update() {
    return (
        <div style={{textAlign:"center"}}>
           <h1>update</h1>
           <Link to='/upload'>Upload</Link>
        </div>
    )
}
