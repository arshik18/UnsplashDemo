/* import React,{Component} from 'react';
import axios from 'axios';
import './products.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Products extends Component{

    state={
        items:['Bag','Box','Belt','Cap','Iron'],
        favourites:[],
        favIconClicked:false,
        datas:[],
        photos:[]
    }

    favouriteList = (item) =>{
        var favList=[...this.state.favourites];
        if(this.state.favourites.length===0 || !this.state.favourites.includes(item))
       {
        favList.push(item);
        this.setState({favourites:favList,favIconClicked:true},()=>{console.log(this.state.favourites)});
       }
        else
       
       {
            favList.splice(favList.indexOf(item),1);
        
        this.setState({favourites:favList,favIconClicked:false},()=>{console.log(this.state.favourites)});
       }
        
    }
    componentDidMount(){
        var YOUR_ACCESS_KEY='db4121687e78dde12fd5be776998a37a512f9d9be917ec4decfe22b5066ad495';
            axios.get(`https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}`,{
                header:{
                    'Accept-Version': 'v1'
                }
            })
            .then(response=>{
                this.setState({datas:response.data})
                console.log(this.state.datas);
            })
            /* axios.get("https://api.spotify.com/v1/me",{
                headers:{
                  'Authorization': 'Bearer '+access_token
                }
              }).then(response=>
                console.log(response)) */
    }

    render(){
       
        let itemList = this.state.items.map((item,index)=>{
            return (
                    <div key={index}>
                        <ul  >
                            <li >{item}&nbsp;&nbsp;
                            <button onClick={(event)=>this.favouriteList(item)}>Add</button>&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCoffee}/> 
                            </li>
                        </ul>
                    </div>)
        })
        let fav=this.state.favourites.map((favourite,index)=>{
            return (<ul key={index}>
                    <li >{favourite}</li>
                    </ul>)
        })
        let photo= this.state.datas.map(d=>{
            return(
                <div className="image_div"> 
                <img  src={d.urls.small}/>
                </div>
            )

        })
        
        return(
            <div>
                    {itemList}
                
                Favourite
              {fav}
              <div className="image">
              {photo}
              </div>
            </div>
        )
    }

}

export default Products;



import React,{Component} from 'react';
import './photogallery.css';
import axios from 'axios';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class PhotoGallery extends Component{

    state={
        datas:[],
        photos:[],
        favouritesList:[],
        icon:faStarO
    }
    onFavouriteClick = (data) =>
    {
        var favList=[];
        var localStorageData=localStorage.getItem("item");
        if(localStorageData != null){
            favList=localStorageData;
        }
        if(this.state.favouritesList.length===0 || !this.state.favouritesList.includes(data.urls.small))
       {
        favList.push(data.urls.small)
        this.setState({favouritesList:favList,icon:faStar});
        localStorage.setItem('myList',favList);
       }
        else
       {
            favList.splice(favList.indexOf(data),1);
            this.setState({favouritesList:favList,icon:faStarO});
            /* var retrievedData = localStorage.getItem("myList");
            var retrievedDataList = JSON.parse(retrievedData);
            retrievedDataList.splice(retrievedDataList.indexOf(data),1);
            localStorage.setItem('myList',JSON.stringfy(retrievedDataList)); */
            }
       
       console.log((localStorage.getItem('myList')));
        
       
    }
    componentDidMount(){
        var YOUR_ACCESS_KEY='db4121687e78dde12fd5be776998a37a512f9d9be917ec4decfe22b5066ad495';
            axios.get(`https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}`,{
                header:{
                    'Accept-Version': 'v1'
                }
            })
            .then(response=>{
                this.setState({datas:response.data})
                console.log(this.state.datas);
            })
            /* axios.get("https://api.spotify.com/v1/me",{
                headers:{
                  'Authorization': 'Bearer '+access_token
                }
              }).then(response=>
                console.log(response)) */
    }
    render(){
        let photo= this.state.datas.map(data=>{
            return(
                <div key={data.id} className="image_div "> 
                    <img className="image"  src={data.urls.small} alt=" Not Found" />
                    <div className="favourite" >
                            <FontAwesomeIcon id={data.id} onClick={(event)=>this.onFavouriteClick(data)} 
                                icon={this.state.icon} color="grey"/> 
                            {/* <FontAwesomeIcon icon={faStarO} /> */}
                    </div>
                </div>
            )

        })
       /*  let favouritephoto = localStorage.getItem("myList").map(favphoto=>{
            return(
                <img src={favphoto}/>
            )
        })     */
        
        return(
            <div className="photo_gallery">
              <div className="photo_container">
              {photo}
              </div>
              <div>
                Favourite
               {/*  {favouritephoto} */}
              </div>
            </div>
        )
    }
}

/* export default PhotoGallery;  */
