import React, {Component} from 'react';
import '../App.css';
class HomeCalender_student extends Component{
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
                                   <td>AI</td>
                                   <td>AI</td>
                                   <td>SIC</td>
                                   <td>MC</td>
                                   <td>NN</td>
                                   <td>NN</td>

                                </tr>
                                <tr>
                                   <th className="secondaryheader">Tuesday</th>
                                   <td>NN</td>
                                   <td>NN</td>
                                   <td>MC</td>
                                   <td>MC</td>
                                   <td>HPC</td>
                                   <td>HPC</td>

                                </tr>
                                <tr>
                                   <th className="secondaryheader">Wednesday</th>
                                   <td>HPC</td>
                                   <td>NN</td>
                                   <td>MC</td>
                                   <td>s8</td>
                                   <td>HPC</td>
                                   <td>HPC</td>

                                </tr>
                                 <tr>
                                   <th className="secondaryheader">Thursday</th>
                                   <td>MC</td>
                                   <td>CC</td>
                                   <td>IC</td>
                                   <td>MC</td>
                                   <td>s6</td>
                                   <td>SIC</td>

                                </tr>
                                  <tr>
                                   <th className="secondaryheader">Friday</th>
                                   <td>MC</td>
                                   <td>NN</td>
                                   <td>NN</td>
                                   <td></td>
                                   <td>HPC</td>
                                   <td>IC</td>

                                </tr>


                             </table>
                           
                        </div>
                </div>
                </div>
			);
	}
}

export default HomeCalender_student;
