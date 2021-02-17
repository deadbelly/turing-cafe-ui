import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({reservation, deleteRes}) => {
  return (
    <article>
      <h2>{reservation.name}</h2>
      <h3>Party of {reservation.number}</h3>
      <div className='date-and-time'>
        <h3>{reservation.date}</h3>
        <p>at</p>
        <h3>{reservation.time}</h3>
      </div>
      <button onClick={() => deleteRes(reservation.id)}>CANCEL</button>
    </article>
  )
}

export default ReservationCard
