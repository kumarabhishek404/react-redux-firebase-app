import React, { Component } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';
import './Navbar.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
  }

  closeMenu = () => {
    this.setState({
      menu: false
    })
  }

  handleMenuBar = () => {
    // alert('clicked')
    this.setState({
      menu: !this.state.menu
    })

  }

  render() {
    const { auth, profile } = this.props
    const links = auth.uid ? <SignedInLinks profile={profile} menu={this.state.menu} /> : <SignedOutLinks menu={this.state.menu} />
    return (
      <nav className={this.state.menu ? "nav-wrapper nav-active black-text grey darken-3" : "nav-wrapper grey darken-3"}>
        <div className="container">
          <Link to='/' onClick={this.closeMenu} className="brand-logo left yellow-text text-accent-2">RE-FIRE</Link>
          <a onClick={this.handleMenuBar}><i class="material-icons right hide-on-med-and-up">{this.state.menu ? 'close' : 'menu'}</i></a>
          <div onClick={this.closeMenu} className={this.state.menu ? 'show-on-small' : 'hide-on-small-only'}>
            {links}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
