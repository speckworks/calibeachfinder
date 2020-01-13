import React, { Component } from 'react'
import MapContainer from '../src/containers/mapcontainer'
import './index.css';
import SearchForm from '../src/components/searchform'
import Favbeach from '../src/components/favbeach'
import ReviewForm from '../src/components/reviewform'
import Reviews from '../src/components/reviews'
import Userbeaches from '../src/components/userbeaches'
import Login from './components/Login'
import {Route, Link} from 'react-router-dom'
import Beachchart from './components/beachchart'


export default class App extends Component {
    state = {
        userbeaches:[],
        qLatLong:{},
        reviews:[],
        results:[],
        rawBeaches:[],
        displayBeach:[],
        user: {
            id: 1
            },
        geocode:{lat:"",
                long:""
            },
        token:localStorage.token,
        loggedInUserId:localStorage.userId,
        name:localStorage.name
    }
   
    componentDidMount(){
        fetch("http://localhost:3000/reviews")
        .then(res=> res.json())
        .catch(error=>console.error("Error:", error))
        .then(resArr=>{
            this.setState({reviews:resArr})
        })

        fetch("http://localhost:3000/userbeaches")
        .then(res=> res.json())
        .then(resArr=>{
            this.setState({userbeaches:resArr})
        })
    }

    
    setToken = ({token, user_id, name}) => {
        localStorage.token = token
        localStorage.userId = user_id
        localStorage.name = name
        
        this.setState({
            token:token,
            loggedInUserId:user_id,
            name:name
        })
    }
    
    logOutClick = () => {
        // localStorage.userId = undefined
        // localStorage.token = undefined
        localStorage.clear()
        this.setState({
            loggedInUserId: null,
            token: null
        })
    }
    

    addReview = (reviewRes) => {
        let reviews = this.state.reviews
        let filteredReviews = reviews.filter(review => review.id !== reviewRes.id )
        filteredReviews.unshift(reviewRes)
        this.setState({reviews:filteredReviews})
    }
   
    deleteReview = (review_id) => {
                            const url = `http://localhost:3000/reviews/${review_id}`
                            fetch(url, {method: 'DELETE'})
                            .then(res=>res.json())
                            .catch(error=>console.error("Error:", error))
                            .then(respObj=>{
                                let reviews = this.state.reviews.filter(review => review.id !== review_id)
                                this.setState({reviews:reviews})
                            })  
                        }
                        
    grabBeaches = async (QlatLong) => {
        let rawBeaches = await fetch('http://localhost:3000/beaches')
        let beaches = await rawBeaches.json()
        let newBeaches = beaches.filter(beach => {
            return parseFloat(beach.lat) <= QlatLong.lat+.05 && 
            parseFloat(beach.lat) >= QlatLong.lat-.05
        })
        // console.log(newBeaches)
        this.setState({results:newBeaches,
                        rawBeaches:beaches})
    }
    

    queryCode = (responseObj) => {
        let QlatLong = {}
        if (responseObj.results.length >0){
            QlatLong.lat = responseObj.results[0].geometry.location.lat
            QlatLong.lng =  responseObj.results[0].geometry.location.lng
        }else{
            alert("Your Please Resubmit your user Query")
            // QlatLong = {lat:37.8591,lng:122.4853}
        }
            // console.log("default", QlatLong)
        this.grabBeaches(QlatLong)
        this.setState({qLatLong:QlatLong})
    }

    displayBeach = (clickedBeach, props) => {
        this.setState({displayBeach:clickedBeach})
        // console.log("favbeach props", props)
        props.history.push('/favbeach')
        // console.log("clickedBeach",clickedBeach)
    }

    // userBeaches = (props) =>{
    //     return <Link to='/userbeaches'>Userbeaches</Link>
    //     // props.history.push('/userbeaches')
    // }

    // returnHome = (props) =>{
    //     props.history.push('/')
    // }
    
                         
    reviewBeach = (props, beach_id) => {
        if (!!props){
        props.history.push('/reviews')
        }else{
            return < redirect to={{ pathname: "/reviews" }} />
        }
    }


    // refreshBeaches = (event) => {
    //     this.setState({displayBeach:[]})
    // }
    
    updateReview = (review, newReview) => {
        console.log(review, newReview)
        let review_id = review.id
        let reviewPatch = {user_id:this.state.loggedInUserId, beach_id:review.beach_id, review:newReview}
        const url = `http://localhost:3000/reviews/${review_id}`
        fetch(url, {method:'PATCH',
            body:JSON.stringify(reviewPatch),
            headers: {'content-type':'application/json'}
            })
        .then(res=>res.json())
        .catch(error=>console.error("Error:", error))
        .then(respObj=>{
           return console.log(respObj)
        })
    }

    addBeachtoUBs = async (props) => {
        const beach_id = await parseInt(props.beach.id)
        // console.log("beach_id", props.beach.id)
        const user_id = this.state.loggedInUserId
        const name = await props.beach.name
        const userbeach = {beach_id:beach_id, user_id:user_id, name:name}
        const url = "http://localhost:3000/userbeaches"
        fetch(url, {method: 'POST',
        body:JSON.stringify(userbeach),
        headers: {'content-type':'application/json'}
        }).then(res => res.json())
        .catch(error=>console.error("Error:", error))
        .then(res => {
            console.log('Success:',res)
            let userbeaches = this.state.userbeaches
            userbeaches.unshift(res)
           this.setState({userbeaches:userbeaches})
           props.history.push('/userbeaches')
        })
    }

    deleteFromUBs = (beach) => {
        const url = `http://localhost:3000/userbeaches/${beach.id}`
        fetch(url, {method: 'DELETE'})
        .then(res=>res.json())
        .catch(error=>console.error("Error:", error))
        .then(respObj=>{
            let userbeaches = this.state.userbeaches.filter(userbeach => userbeach.id !== beach.id)
            this.setState({userbeaches:userbeaches})
        })  
    }
    
    
    render() {  
        return (
            <div id="title">
                    CALIFORNIA BEACH FINDER
                <div className="navbuttonscontainer">
                    <Link to="/">
                    <button className="roundbutton">
                    Beach Finder Mainpage</button>
                    </Link>
                    <Link to="/beachchart">
                    <button className="roundbutton">
                    Beach Data Chart</button>
                    </Link>
                    <Link to="/userbeaches">
                    <button className="roundbutton">Favorite Beaches</button>
                    </Link>
                    <Link to="/reviews">
                    <button className="roundbutton"
                    >Reviews</button>
                    </Link>

                
                    {!!this.state.token
                                    ? <Login 
                                    token={this.state.token}
                                    setToken={this.setToken}
                                    loggedInUserId={this.state.loggedInUserId}/>
                                    : <Login setToken={this.setToken}
                                    />
                    }
                    <>
                    {!!this.state.token
                        ? <button className="roundbutton" onClick={this.logOutClick}>Log Out</button>
                        :""
                    }
                    </>
                    </div>
                    <Route exact path={'/'} render= {(props) => 
                    <div id="search-bar">
                                <SearchForm {...props} 
                                grabBeaches={this.grabBeaches}
                                queryCode={this.queryCode}
                    />
                    </div>}
                    />

                    <Route exact path={'/'} render= {(props) => 
                        {return this.state.results.length === 0 
                        ? 
                        <div id="map-showcase">
                        <MapContainer {...props} 
                        beaches={this.state.results} 
                        qLatLong={this.state.qLatLong}
                        displayBeach={this.displayBeach}/>
                        </div> 
                        :
                        <div id="map-showcase"> 
                        <MapContainer {...props}
                        beaches={this.state.results} 
                        displayBeach={this.displayBeach}
                        qLatLong={this.state.qLatLong}
                    />
                     {/* {console.log("this.state.qLatLong", this.state.qLatLong)} */}
                    </div>
                    }
                    }
                    />

                    <Route exact path={'/favbeach'} render= {(props) =>
                   <div id="fav-beach">
                    <Favbeach id="favbeach" {...props} 
                        beach={this.state.displayBeach}
                        refreshBeaches={this.refreshBeaches}
                        addBeachtoUBs={this.addBeachtoUBs}
                        userBeaches={this.userBeaches}
                    />
                    </div>           
                    }    
                    /> 

                    <Route exact path={'/userbeaches'} render= {(props) => 
                    <div id="userbeaches">
                    <Userbeaches {...props}
                    userbeaches={this.state.userbeaches}
                    deleteFromUBs={this.deleteFromUBs}
                    returnHome={this.returnHome}
                    reviewBeach={this.reviewBeach}
                    user_id={this.state.loggedInUserId}
                    rawBeaches={this.state.rawBeaches}
                    />
                    </div>}
                    />

                    <Route exact path={'/reviews'} render= {(props) =>
                    <div id="reviewform roundbutton">
                    <ReviewForm {...props}
                                displayBeach={this.state.displayBeach}
                                addReview={this.addReview}
                                returnHome={this.returnHome}
                                user_id={this.state.loggedInUserId}
                    />
                    </div>}
                    />

                    <Route exact path={'/reviews'} render={(props) =>
                    <div id="reviews">
                    <Reviews {...props}
                            reviews={this.state.reviews}
                            beaches={this.state.results}
                            deleteReview={this.deleteReview}
                            updateReview={this.updateReview}
                            user_id={this.state.loggedInUserId}
                    />
                    </div>}
                    />

                    <Route exact path={'/beachchart'} render={(props) =>
                    <div id="beachchart">
                    <Beachchart {...props}
                       rawBeaches={this.state.rawBeaches}
                    />
                    </div>}
                    />
           
        </div>
        )
    }
}

