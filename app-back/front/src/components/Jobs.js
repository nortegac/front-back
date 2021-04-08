import React from 'react';
import Job from "./Job";

export default class JobsList extends React.Component {
    componentDidMount() {
        const url = "/offers";
        fetch(url)
          .then(res => {
            return res.json();
          }).then(offers => {
            this.setState({ offers })
          })
    }

  state = { 
  	"offers": []
  };

  render() {
  	return (
  	  <div>
  	    {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
      </div>
    );
  }
}