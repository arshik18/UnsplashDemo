import React,{Component} from 'react';
import './login.css';
import { withRouter } from "react-router-dom";
class Login extends Component{
    state={
        username:"",
        password:"",
        errorMessage:"Incorrect Username/Password.Please try again. ",
        
    }

    componentWillMount(){
       let userDetail=[
            {
                username:'user1',
                password:'user1',
                userFavouriteList:[]
            },
            {
                username:'user2',
                password:'user2',
                userFavouriteList:[]
            },
            {
                username:'user3',
                password:'user3',
                userFavouriteList:[]
            },
            {
                username:'user4',
                password:'user4',
                userFavouriteList:[]
            }
        ]
        if(localStorage.getItem("user") == null)
        {
            localStorage.setItem("user",JSON.stringify(userDetail));
        }
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
        localStorage.setItem("authenticated",'false');
        for(let u=0;u<user.length;u++)
        {
            if(this.state.username=== user[u].username && this.state.password === user[u].password)
            {
                this.state.authenicated= true;
                localStorage.setItem("authenticated",'true');
                localStorage.setItem("currentUsername",this.state.username);
                localStorage.setItem("item", JSON.stringify( user[u].userFavouriteList));
                break;
            }
        }
        if (this.state.authenicated===true)
        {
            this.props.history.push('/home');
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