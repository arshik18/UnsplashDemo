import React,{Component} from 'react';
import {  Link } from 'react-router-dom';
import './topnav.css';
import { withRouter } from "react-router-dom";
class Topnav extends Component {

  state={
    currentUsername:localStorage.getItem("currentUsername")
  }

  logoutHandler = ()=>{
    
    let user=JSON.parse(localStorage.getItem('user'));
    for(let u=0;u<user.length;u++)
    {
        if(localStorage.getItem("currentUsername")=== user[u].username )
        {
          if(JSON.parse(localStorage.getItem("item")) == null){
            user[u].userFavouriteList=[]; 
          }
          else{
            user[u].userFavouriteList=JSON.parse(localStorage.getItem("item"));
          }          

           localStorage.setItem("user",JSON.stringify(user));
           localStorage.removeItem("item");
           localStorage.removeItem("authenticated");
           break;
        }
        

    }
    this.props.history.push('/');
    
  }
  render()
  {
    return(
        <React.Fragment>
          <div className="navbar">
            <div>
                <span>< Link to={'/home'} className="label">Photo Gallery &nbsp;</ Link></span>
                <span>< Link to={'/home/favourite'} className="label"> &nbsp;Favourites</ Link></span>
            </div>
            <div>
                <span className="label">{this.state.currentUsername[0].toUpperCase() +  this.state.currentUsername.slice(1)}&nbsp;</span>
                <button className="btn logout label"  onClick={this.logoutHandler}>Logout</button>
            </div>
          </div>
        </React.Fragment>
        
    )
  }
}
export default withRouter(Topnav);