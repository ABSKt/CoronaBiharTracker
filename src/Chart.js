import React,{Component} from 'react';

import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData : {
                labels : ['Bihar'],
                datasets :[
                    { 
                    label:'total infected numbers',
                    data:[100],
                    backgroundColor : 'rgba(255,0,0,0.6)'
                    }
                ]
            },
            total : 0
        }
    }
    componentDidMount(){
    
        axios.get("https://api.covid19india.org/v2/state_district_wise.json")
        .then((res)=>{
            let copylabel = [];
            let copyData = [];
            let tval =0;
            var i;
            for( i = 0; i< res.data[22].districtData.length; i++){ 
                copylabel.push(res.data[22].districtData[i].district)
                copyData.push(res.data[22].districtData[i].confirmed)
                tval+=res.data[22].districtData[i].confirmed;
            }
            this.setState({
                chartData : {
                    labels : copylabel,
                    datasets :[
                        { 
                        label:'total infected numbers',
                        data:copyData,
                        backgroundColor : 'rgba(255,0,0,0.6)'
                        }
                    ]
                },
                total : tval
              
            });
        })
        .catch(err => console.log(err));
    }
    render(){

        return(
            <div className = "chart">
                <h1>Total Cases in Bihar :{this.state.total} </h1>
                <Bar
                
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title:{
                            display:true,
                            text:'Total Corona Cases',
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            position: 'right'
                        }
                    }}
                />
           </div>
        )
    }
}

export default Chart;