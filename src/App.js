import React,{Component} from 'react';
import Chart from './Chart';
import Death from './Line'
class App extends Component{
   
  render(){
    return (
      <div>
        <Death />
        <Chart />
      </div>
    );
  }
}
export default App;
