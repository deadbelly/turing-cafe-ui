import React from 'react'

const ReservationForm = ({name, date, time, guests, updateForm, addRes}) => {
  return (
    <>
      <input
        name='formName'
        type='text'
        value={name}
        onChange={updateForm}
      />
      <input
        name='formDate'
        type='date'
        value={date}
        onChange={updateForm}
      />
      <input
        name='formTime'
        type='time'
        value={time}
        onChange={updateForm}
      />
      <input
        name='formGuests'
        type='number'
        min='1'
        value={guests}
        onChange={updateForm}
      />
      <button name='submit' onClick={addRes}>Add Reservation</button>
    </>
  )
}

export default ReservationForm
