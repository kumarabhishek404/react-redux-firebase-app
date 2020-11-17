import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = (props) => {
  return (
    <div>
      <ul className={props.menu == true ? "center-align row" : 'right'}>
        <li className={props.menu == true ? 'col s12' : ''}><NavLink to='/signup' style={props.menu == true ? {fontSize: 20, marginTop: 20, color: '#e0e0e0'} : {fontSize: 20, color: '#e0e0e0'}}>Signup</NavLink></li>
        <li className={props.menu == true ? 'col s12' : ''}><NavLink to='/signin' style={{fontSize: 20, color: '#e0e0e0'}}>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks