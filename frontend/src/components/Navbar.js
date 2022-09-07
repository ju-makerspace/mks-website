import React from 'react'

const Navbar = () => {
  return (
    <navbar>
            <img src={process.env.PUBLIC_URL + '/images/mks.png'} />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Mentor</li>
            <li>Featured</li>
        </ul>
    </navbar>
  )
}

export default Navbar