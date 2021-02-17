import React from 'react'

const ReservationCard = ({reservation}) => {
  return (
    <article>
      <h2>{reservation.name}</h2>
      <h3>Party of {reservation.number}</h3>
      <div className='date-and-time'>
        <h3>{reservation.date}</h3>
        <p>at</p>
        <h3>{reservation.time}</h3>
      </div>
    </article>
  )
}

export default ReservationCard
