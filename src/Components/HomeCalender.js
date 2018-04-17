import React, {Component} from 'react';
import '../App.css';
var axios = require('axios');
class HomeCalender extends Component{
  constructor(props){
    super(props);
this.state={
    username:"",
    loaded:false,
    mon1:"",
    mon2:"",
    mon3:"",
    mon4:"",
    mon5:"",
    mon6:"",
    tues1:"",
    tues2:"",
    tues3:"",
    tues4:"",
    tues5:"",
    tues6:"",
    wed1:"",
    wed2:"",
    wed3:"",
    wed4:"",
    wed5:"",
    wed6:"",
    thurs1:"",
    thurs2:"",
    thurs3:"",
    thurs4:"",
    thurs5:"",
    thurs6:"",
    fri1:"",
    fri2:"",
    fri3:"",
    fri4:"",
    fri5:"",
    fri6:""


};
  }
  componentDidMount() {
    this.setState({username:localStorage.getItem('username')});
    axios.post('http://192.168.43.208/6000', {
          "label":"timetableget",
          "username": this.state.username,
          
})
.then(function (response) {
    console.log(typeof response.data);
    this.setState({
      mon1:response.mon1,
    mon2:response.mon2,
    mon3:response.mon3,
    mon4:response.mon4,
    mon5:response.mon5,
    mon6:response.mon6,
    tues1:response.tues1,
    tues2:response.tues2,
    tues3:response.tues3,
    tues4:response.tues4,
    tues5:response.tues5,
    tues6:response.tues6,
    wed1:response.wed1,
    wed2:response.wed2,
    wed3:response.wed3,
    wed4:response.wed4,
    wed5:response.wed5,
    wed6:response.wed6,
    thurs1:response.thurs1,
    thurs2:response.thurs2,
    thurs3:response.thurs3,
    thurs4:response.thurs4,
    thurs5:response.thurs5,
    thurs6:response.thurs6,
    fri1:response.fri1,
    fri2:response.fri2,
    fri3:response.fri3,
    fri4:response.fri4,
    fri5:response.fri5,
    fri6:response.fri6,
    });
    this.email = response.data;
  
    console.log(this.email);
    this.setState({loaded: true});
  
})
.catch(function (error) {
  console.log("no data yet");
  console.log(error);
});
}
	render(){
		return(
			<div className="timetable_section">
			<h3>Time table</h3>
                <div className="query_logs">
                        <div className="timetable">
                             <table border="border" className="tableclass">
                                <tr className="mainheader">
                                  <th></th>
                                  <th>P1</th>
                                  <th>P2</th>
                                  <th>P3</th>
                                  <th>P4</th>
                                  <th>P5</th>
                                  <th>P6</th>

                                 </tr>
                                <tr>
                                   <th className="secondaryheader">Monday</th>
                                   <td>{this.state.mon1}</td>
                                   <td>{this.state.mon2}</td>
                                   <td>{this.state.mon3}</td>
                                   <td>{this.state.mon4}</td>
                                   <td>{this.state.mon5}</td>
                                   <td>{this.state.mon6}</td>

                                </tr>
                                <tr>
                                   <th className="secondaryheader">Tuesday</th>
                                   <td>{this.state.tues1}</td>
                                   <td>{this.state.tues2}</td>
                                   <td>{this.state.tues3}</td>
                                   <td>{this.state.tues4}</td>
                                   <td>{this.state.tues5}</td>
                                   <td>{this.state.tues6}</td>

                                </tr>
                                <tr>
                                   <th className="secondaryheader">Wednesday</th>
                                   <td>{this.state.wed1}</td>
                                   <td>{this.state.wed2}</td>
                                   <td>{this.state.wed3}</td>
                                   <td>{this.state.wed4}</td>
                                   <td>{this.state.wed5}</td>
                                   <td>{this.state.wed6}</td>

                                </tr>
                                 <tr>
                                   <th className="secondaryheader">Thursday</th>
                                   <td>{this.state.thurs1}</td>
                                   <td>{this.state.thurs2}</td>
                                   <td>{this.state.thurs3}</td>
                                   <td>{this.state.thurs4}</td>
                                   <td>{this.state.thurs5}</td>
                                   <td>{this.state.thurs6}</td>

                                </tr>
                                  <tr>
                                   <th className="secondaryheader">Friday</th>
                                   <td>{this.state.fri1}</td>
                                   <td>{this.state.fri2}</td>
                                   <td>{this.state.fri3}</td>
                                   <td>{this.state.fri4}</td>
                                   <td>{this.state.fri5}</td>
                                   <td>{this.state.fri6}</td>

                                </tr>


                             </table>
                           
                        </div>
                </div>
                </div>
			);
	}
}

export default HomeCalender;
