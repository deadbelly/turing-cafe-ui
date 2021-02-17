const apiCalls = {
  getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
  },

  postReservation(newRes) {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRes)
    })
  },

  deleteReservation(id) {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
  }
}

export default apiCalls;
