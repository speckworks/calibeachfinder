import React, { Component } from 'react'


export default class ReviewForm extends Component {
    state = {
        value: 'Please submit a beach review.'
      };  

    handleChange = (event) => {
        this.setState({value:event.target.value});
    }
    
    handleSubmit = (event) => {
        // alert('Thanks for Your Review: ' + this.state.value);
        event.preventDefault();
        let newBeachReview = this.state.value
        console.log("displayBeach", this.props.displayBeach)
        let beach_id = this.props.displayBeach.id 
        let newBeachReviewObj = {
            review:newBeachReview,
            beach_id:beach_id,
            user_id:this.props.user_id 
        }
        const url = "http://localhost:3000/reviews"
        fetch(url, {method: 'POST',
        body:JSON.stringify(newBeachReviewObj),
        headers: {'content-type':'application/json'}
        }).then(res => res.json())
        .catch(error=>console.error("Error:", error))
        .then(res => {
            console.log('Success:', res)
            this.props.addReview(res)
        })
    }
    
    render() {
        return (    
                <div>
                <div id="reviewform">
                <form onSubmit={this.handleSubmit}>
                <label><div>
                    Review for : {this.props.displayBeach.name}
                    </div>
                    <textarea value={this.state.value}  onChange={this.handleChange}/>
                    <div>
                <input className="roundbutton" type="submit" value="Submit" />
                </div>
                </label>
                </form>
                </div>
                </div>

        )
    }
}
