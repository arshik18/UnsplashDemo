import React from 'react';
import Login from '../login/login';
import './loginfirst.css'; 
const loginfirst= ()=>
{
    return(
        <React.Fragment>
            <div className="loginfirst">
           <h4 className="login_heading">Please Login to continue...</h4> 
           </div>
           <Login/>
        </React.Fragment>
    )
}
export default loginfirst;