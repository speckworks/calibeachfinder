
import React, { Component } from 'react'

export default class SearchForm extends Component {
    state={city:"",
    state:"California"}
    
    handleChange = (event) => {
        event.preventDefault()
        this.setState({...this.state, [event.target.name]:event.target.value})
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        let city = this.state.city
        let state = this.state.state
        const API_KEY1= process.env.REACT_APP_GOOGLE_MAPS_KEY2
        // console.log("apikey1", process.env)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=${API_KEY1}`
            ).then(res=>res.json())
            .then(respObj =>{   
                // console.log(respObj)
                    this.props.queryCode(respObj)
                    })
                this.setState({city:"", state:""})
            }
            
    render() {
        return (
            <div >
               <form id="searchform" onSubmit={this.onSubmit}>
                           Please Enter Your Location:
                    <label>
                    <input  onChange={this.handleChange} 
                            type="text"
                            placeholder="city"
                            name="city" 
                            display="city"
                            defaultValue={this.state.city}
                            autoComplete="off"
                            id="searchform_input"
                    >
                    </input>
                    </label>
                    {/* <input  onChange={this.handleChange}
                            type="text"
                            name="state"
                            placeholder="state"
                            defaultValue={this.state.state}
                            autoComplete="off">        
                    </input> */}
                    <div>
                    <button 
                            type="submit" 
                            value="Submit"
                            className="roundbutton"
                            >Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}
