import React, { Component } from 'react'

export default class Reviews extends Component {
    
    state = {
        reviews:[]
    };  
    
    handleChange = (event) => {
        this.setState({reviews:event.target.value})
    }
    
    render() {
        const reviewsArr = this.props.reviews.sort((a,b) => b.id - a.id)
        const allReviews = reviewsArr.map((review)=>{
            if (review.user_id === parseInt(this.props.user_id)){
                return <span key={review.id}>
          <div>Beach:{review.beach_id
             }</div>
          <textarea defaultValue={review.review} onChange={this.handleChange}>
          </textarea>
          <button onClick={()=>this.props.deleteReview(review.id)}
          className="roundbutton">Delete</button>
          <button onClick={()=>this.props.updateReview(review, this.state.reviews)}
          className="roundbutton">Update</button>
          <br></br></span>
            }else{
                console.log("user", review.user_id, this.props.user_id)
               return <span></span>
            }
        })
        return (
            <div className="container reviews" >
            <div>Reviews of Beaches</div>
                {/* <button>All Beach Reviews</button> */}
                <div>
            {allReviews}
                </div>
            </div>
            )
    }
}