import React, { Component } from 'react';
import apiCalls from '../../apiCalls';
import ReservationCard from '../ReservationCard/ReservationCard'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    apiCalls.getReservations()
      .then(response => this.setState({reservations: response}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.reservations.map(reservation =>
            <ReservationCard key={reservation.id} reservation={reservation}
          />)}
        </div>
      </div>
    )
  }
}

export default App;
