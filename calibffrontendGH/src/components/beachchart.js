import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';

let labels = ["Dog Friendly 🐕", "Stroller Friendly 👶🏻", "Fishing 🎣", "Biking 🚲", "Restrooms 🚻", "Camping ⛺️"]
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', 'ff5e00', '#115DA8', '#8A2BE2']
let data;

const options = {
    legend: {
        display:true,
        position:'left',
        labels: {
            // This more specific font property overrides the global property
            fontColor:"#000000",
            fontSize:30
        }
        },
    tooltips: {
            titleFontSize: 20,
            bodyFontSize: 20,
            opacity:'none'
          }
    
    
    }

export default class beachchart extends Component {
    render() {
        if (!this.props){
            console.log("no beaches yet")
            return null
        }else{
            const dogBeaches = this.props.rawBeaches.filter(beach => beach.dog_friendly.toLowerCase() === "yes")
            let dbCount = ((dogBeaches.length/1563)*100).toFixed(2)
            console.log(dbCount)
            const strollerBeaches = this.props.rawBeaches.filter(beach => beach.ez4strollers.toLowerCase() === "yes")
            let sbCount = ((strollerBeaches.length/1563)*100).toFixed(2)
            const fishBeaches = this.props.rawBeaches.filter(beach => beach.fishing.toLowerCase() === "yes")
            let fbCount = ((fishBeaches.length/1563)*100).toFixed(2)
            const bikeBeaches = this.props.rawBeaches.filter(beach => beach.bike_path.toLowerCase() === "yes")
            let bbCount = ((bikeBeaches.length/1563)*100).toFixed(2)
            const rrBeaches = this.props.rawBeaches.filter(beach => beach.restrooms.toLowerCase() === "yes")
            let rrCount = ((rrBeaches.length/1563)*100).toFixed(2)
            const cBeaches = this.props.rawBeaches.filter(beach => beach.campground.toLowerCase() === "yes")
            let cCount = ((cBeaches.length/1563)*100).toFixed(2)
                    
                    data = {
                        labels: labels,
                        datasets: [{
                            data: [dbCount, sbCount, fbCount, bbCount, rrCount,cCount],
                            backgroundColor: colorHex,
                            hoverBackgroundColor: colorHex,
                        }],
                        backgroundColor:'rgba(0, 0, 0, 0.5)'
                    };
                console.log(dbCount,sbCount, fbCount)
                }
        // console.log("rawbeaches",`${this.props.rawBeaches[0].fishing}`)
        return (
            <div>
                <h2 id="piechart" className="beachDataFont">Beach Data</h2>
                <h4 id="piechart" className="beachDataFont">Percentages based on all beach visitor reviews for 1563 beaches as provided by www.coastal.ca.gov.</h4>
                <Pie id="piechart"
                 className="chartText" 
                 data={data} 
                 options={options}
                style={{backgroundColor:"#000000"}}
                 />
            </div>
        );
    }
}
