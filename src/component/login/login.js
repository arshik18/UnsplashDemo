import React,{Component} from 'react';
import './login.css';
import { withRouter } from "react-router-dom";
class Login extends Component{

    state={
        username:"",
        password:"",
        errorMessage:"Incorrect Username/Password.Please try again. "
    }

    componentWillMount(){

       let userDetail=[
            {
                username:'arshi',
                password:'arshi@123',
                userFavouriteList:[]
            },
            {
                username:'khan',
                password:'khan@123',
                userFavouriteList:[]
            }
        ]
        if(localStorage.getItem("user") == null){
            localStorage.setItem("user",JSON.stringify(userDetail));
        }
        console.log(JSON.parse(localStorage.getItem('user')));
        
    }

    formHandler=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
        
    }
    mySubmitHandler=(event)=>{
        event.preventDefault();
        let username=this.state.username;
        let password=this.state.password;
        let user=JSON.parse(localStorage.getItem('user'));
        console.log("user:",user);
        let authenicated=false;
        for(let u=0;u<user.length;u++)
        {
            authenicated=false;
            if(this.state.username=== user[u].username && this.state.password === user[u].password)
            {
                authenicated= true;
                localStorage.setItem("currentUsername",this.state.username);
                localStorage.setItem("item", JSON.stringify( user[u].userFavouriteList));
                console.log(localStorage.getItem("currentUsername"));
                break;
            }
        }
        if (authenicated===true)
        {
           
            this.props.history.push({
                pathname:'/home',
                state: { authenticated: true }})
        }
        else 
        {
            
            document.getElementById("errorMessage").innerHTML =this.state.errorMessage;
            
        }

    }

    render(){
        console.log(this.state.username);
        return(
            <div className="login"> 
            <form className="login-form" >
                    <div id="errorMessage" className="errorMessage"></div>
                    <div className="form-group">
                        <input className="form-control" 
                               type="text"  id="username" 
                               placeholder="Enter Username"
                               name="username"
                               onChange={this.formHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="password" 
                                className="form-control" 
                                id="password" 
                                name="password"
                                placeholder="Password"
                                onChange={this.formHandler}/>
                    </div>
                   
                    <button  className="btn btn-primary" disabled={!(this.state.username && this.state.password)} onClick={this.mySubmitHandler}>Submit</button>
                    </form>
            </div>
    
        )
    }
}

export default withRouter(Login);