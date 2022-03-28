import React from 'react'

function ProfileCard({card}) {
  return (
    <div className='greenCard'>
    <h3>{card.firstname} {card.lastname}</h3>
    <p>{card.email}</p>
    <p>{card.phone}</p>
    </div>
  )
}

export default ProfileCard