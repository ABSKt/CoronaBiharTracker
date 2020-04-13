import React,{Component} from 'react';
import axios from 'axios';

class Death extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalDeath : 0
        }
    }
    componentDidMount(){
    
        axios.get("https://api.covid19india.org/states_daily.json")
        .then((res)=>{
            var total = 0;
            var i;
            for( i =2;i<=res.data.states_daily.length; i+=3){ 
                total+=parseInt(res.data.states_daily[i].br);
            }
            this.setState({
                totalDeath : total
            })
        })
        .catch(err => console.log(err));
    }
    render(){

        return(
            <div style = {{color :"red"}}>
                <h1>Total Death : {this.state.totalDeath}</h1>
           </div>
        )
    }
}

export default Death;