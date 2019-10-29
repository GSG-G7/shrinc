import React from 'react';
// import axios from 'axios';
import Card from '../../common/Card';

import './style.css';

export default class ResultsPage extends React.Component {
  state = {
    therapist: [],
  };

  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/appTFjZlkbQpQHWD2/therapist/recw2hWu4CS86pd73?api_key=${process.env.Airtable_KEY}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ therapist: data.records });
      })
      .catch(err => {
        // Error :(
        console.log(err);
      });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { therapist } = this.state.therapist;
    return (
      <>
        <div className="Results">
          <div className="Results__TherapyType">
            <h3 className="Results__TherapyType__title">Therapy Type</h3>
            <h4 className="Results__TherapyType__name">hhh</h4>
          </div>
          <div className="Results__TherapistsNames">
            <h3 className="Results__TherapistsNames__suggest">
              According to your answers, we would suggest that you search for
              therapists specializing in:
            </h3>
            <div className="Results__TherapistsNames__Cards">
              {therapist.map(Data => (
                <Card {...Data.fields} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
