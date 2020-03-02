import React, { Component } from 'react'

export default class Favbeach extends Component {
    render() {
        return (
            <div id="favbeach">
                <div>
                <img
                    id="imgframe" 
                    key={this.props.beach.id} 
                    src={this.props.beach.photo_1} 
                    alt="beach">
                </img>
                <div id="detailtext">
                <div></div>
                Beach: {this.props.beach.name}
                <div></div>
                Stroller Friendly: {!this.props.beach.ez4strollers ? "No Info": this.props.beach.ez4strollers}
                <div></div>
                Dog Friendly: {!this.props.beach.dog_friendly ? "No Info": this.props.beach.dog_friendly}
                <div></div>
                Camping: {!this.props.beach.campground ? "No Info": this.props.beach.campground}
                <div></div>               
                Fishing: {!this.props.beach.fishing ? "No Info": this.props.beach.fishing}
                <div></div>
                Boating: {!this.props.beach.boating ? "No Info": this.props.beach.boating}
                </div>
                   <button className="roundbutton"
                    onClick={()=>this.props.addBeachtoUBs(this.props)}
                    >
                   {console.log(this.props)}
                    Add This Beach to my Favs!
                    </button>
                </div>
                    {/* </Link> */}
                    {/* <button id="roundbutton"
                            onClick={()=>this.props.userBeaches(this.props)}
                    > View My Favorite Beaches 
                    </button> */}
            </div>
           )    
    }
}