import React, { Component } from 'react';
import apiCalls from '../../apiCalls';
import ReservationCard from '../ReservationCard/ReservationCard'
import ReservationForm from '../ReservationForm/ReservationForm'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      formName: '',
      formDate: null,
      formTime: null,
      formGuests: null,
      reservations: []
    }
  }

  componentDidMount() {
    apiCalls.getReservations()
      .then(response => this.setState({reservations: response}))
  }

  updateForm = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addRes = (event) => {
    return true
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm
            name={this.state.formName}
            date={this.state.formDate}
            time={this.state.formTime}
            guests={this.state.formGuests}
            updateForm={this.updateForm}
            addRes={this.addRes}
          />
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
