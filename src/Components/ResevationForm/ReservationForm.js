import React from 'react'

const ReservationForm = ({name, date, time, guests, updateForm, addRes}) => {
  return (
    <input
      name='name'
      type='text'
      value={name}
      onChange={updateForm}
    />
    <input
      name='date'
      type='date'
      value={date}
      onChange={updateForm}
    />
    <input
      name='time'
      type='time'
      value={time}
      onChange={updateForm}
    />
    <input
      name='guests'
      type='number'
      min='1'
      value={guests}
      onChange={updateForm}
    />
  )
}

export default ReservationForm
