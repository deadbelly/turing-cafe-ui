const apiCalls = {
  getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
  }
}

export default apiCalls;
