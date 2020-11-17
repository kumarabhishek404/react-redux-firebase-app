import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const makeStyle = {

}

const SignedInLinks = (props) => {
  return (
    <div>
      {
        props.menu !== true ? (

          <ul className='right'>
            <li><NavLink to='/create' style={{color: '#e0e0e0'}}>New Project</NavLink></li>
            <li><a onClick={props.signOut} style={{color: '#e0e0e0'}}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating yellow accent-2 black-text">
              {props.profile.initials}
            </NavLink></li>
          </ul>
        )
          : (
            <ul className="center-align row">
              <li className='col s12'><NavLink to='/' className="btn btn-floating yellow accent-2 black-text" style={{fontSize: 20, marginTop: 40}}>
                {props.profile.initials}
              </NavLink></li>
              <li className='col s12'><NavLink to='/create' style={{fontSize: 20, color:'#e0e0e0'}}>New Project</NavLink></li>
              <li className='col s12'><a onClick={props.signOut} style={{fontSize: 20, color: '#e0e0e0'}}>Log Out</a></li>
            </ul>
          )
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
