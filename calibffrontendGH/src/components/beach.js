import React, { Component } from 'react'

export default class beach extends Component {
    render() {
        let beach = this.props.beach
        let beachCard;
        console.log("beach", beach)
        if(beach.length > 0){
            beachCard = beach.map(beach=>{ 
            return <div>
            <img id="userbeachphoto" 
                src={beach.photo_1}
                alt="no_image_yet">
                </img> 
            </div>
            })
        }else{
           return beachCard = <span>Loading...</span>
        }

        return (
            <div>
            {beachCard}
            </div>
        )
    }
}
