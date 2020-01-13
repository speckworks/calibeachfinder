import React, { Component } from 'react'

export default class Userbeaches extends Component {
    
    
    render() {
        let userbeachesArr = this.props.userbeaches.sort((a,b) => b.id - a.id)
        let user_id = this.props.user_id

        // let beaches = this.props.reviewBeaches
        let userbeachesFiltered = userbeachesArr.filter(beaches=>beaches.user_id === user_id)

        let userBeaches;
        // console.log("user_id", this.props.user_id)
        // console.log("array of beach objects", userbeachesArr)
        // if (userbeachesArr.length > 0){
        //   userBeaches = userbeachesArr.map((userbeach) => {
        //     if (parseInt(userbeach.user_id) === user_id)
        //     {

        userBeaches = userbeachesFiltered.map((userbeach)=>{
            return <span>
                <div id="userbeach">
                    {/* {"beach.user_id", console.log(beach.user_id)} */}
                    <div key={userbeach.beach_id}>
                    {userbeach.name}
                    <br></br>
                    <img id="userbeachphoto" 
                    src={userbeach.beach ? userbeach.beach.photo_1: "loading" }
                    alt="no_image_available_for_this_beach">
                    </img>
                    </div>
                    <button id="userbeachesbuttons" className="roundbuttonFavbeach"
                    onClick={()=>this.props.deleteFromUBs(userbeach)}>
                    Delete Favorite
                    </button>

                    {/* <Link to="/reviews">
                    <button id="userbeachesbuttons" >Review This Beach</button>
                    </Link> */}
                    <button id="userbeachesbuttons" className="roundbuttonFavbeach"
                    onClick={()=>this.props.reviewBeach(this.props, userbeach.beach_id)}>
                    Review Beach
                    </button> 
                </div>
            </span>
        })
       
        return (
            <div id="roundbutton">
                {/* <button id="roundbutton"
                        onClick={()=>this.props.returnHome(this.props)}
                        >
                        Return to Beachfinder Main
                        </button> */}
            <div id="favbeachbox">     Favorite Beaches:
                {userBeaches}
                <div id="userbeach">
                </div>
            </div>
            </div>
        )
    }
}
