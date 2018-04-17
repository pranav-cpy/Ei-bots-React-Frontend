import React, {Component} from 'react';
import '../App.css';
import user from '../user.png';
var axios = require('axios');

class HomeQuery extends Component{
      constructor(props){
            super(props);
      this.queries=[];
      this.state={
            loaded:false,
            username:""

      }
      }
      componentDidMount() {
            this.setState({username:localStorage.getItem('username')});
            axios.post('http://192.168.43.208/6000', {
                  "label":"queries",
                  "username": this.state.username,
                  
        })
        .then(function (response) {
            console.log(typeof response.data);
            this.queries = response.data;
            console.log(this.queries);
            this.setState({loaded: true});
          
        })
        .catch(function (error) {
          console.log("no data yet");
          console.log(error);
        });
        }

	render(){

            let list = [];
        if (this.state.loaded) {
            for (let author in this.queries) {
                
                list.push(

                  <div className="query_user">
                  <div className="user_photo"><img src= {user} className="photo_user" alt=""/>
                  <h5 className="query_name">{this.queries[author].name}</h5></div>
                  <p className="query_message">{this.queries[author].query} </p>
                  </div>
                );
            }
        }



		return(
			
			<div className="query_section">
			<h3 >Student Queries</h3>
                <div className="query_logs">
                       {/* <div className="query_user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/>
                              <h5 className="query_name">Gopi</h5></div>
                              <p className="query_message">I am unable to complete the assignment. can I get some help for completing it? </p>
                        </div>
                        
                        <div className="query_user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/>
                              <h5 className="query_name">Pranav</h5></div>
                              <p className="query_message">We are doing some ml project and I heared that you have some dataset related to health care. Can I have a copy of the same?</p>
                        </div>

                        <div className="query_user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/>
                              <h5 className="query_name">Midhun</h5></div>
                              <p className="query_message">I wont be able to do my presentation due to some health isues.</p>
                        </div>
                        <div className="query_user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/>
                              <h5 className="query_name">Raju</h5></div>
                              <p className="query_message">I would like to attend a hackathon tomorrow. I need to know my attendance percentage until now. thank you. </p>
                        </div>
                        <div className="query_user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/>
                              <h5 className="query_name">Mary</h5></div>
                              <p className="query_message">What are the applications of RNN other than language processing?</p>
            </div>*/}
              {list}
            
                </div>

       
          
           
             
             </div>
       
             
			);
	}
}

export default HomeQuery;
