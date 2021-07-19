import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import full_logo from '../media/full_logo.png'
import icon_only from '../media/icon_only.png'
// import menu_icon from '../media/menu.svg';
import 'font-awesome/css/font-awesome.min.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.toggleOverlay = this.toggleOverlay.bind(this)
        this.state = { overlay: false }
    }

    toggleOverlay() {
        console.log('Button clicked')
        this.setState({ overlay: !this.state.overlay })
    }

    render() {
        return (
            <nav className="nav">
                <header>
                    <button
                        className="fa fa-bars"
                        onClick={() => this.toggleOverlay()}
                    ></button>
                    <Link
                        to="/"
                        className="logo"
                        onClick={() => this.toggleOverlay()}
                    >
                        <img
                            className="logo-mobile"
                            src={full_logo}
                            alt="logo"
                        />
                        <img className="logo-web" src={icon_only} alt="logo" />
                    </Link>
                </header>

                <div
                    className={` ${'menu'} ${
                        this.state.overlay && `menu-overlay`
                    } `}
                >
                    <Link
                        to="/applications"
                        className="menu-item"
                        onClick={() => this.toggleOverlay()}
                    >
                        Applications
                    </Link>
                    <Link
                        to="/network"
                        className="menu-item"
                        onClick={() => this.toggleOverlay()}
                    >
                        Network
                    </Link>
                    <Link
                        to="/technology"
                        className="menu-item"
                        onClick={() => this.toggleOverlay()}
                    >
                        Technology
                    </Link>
                    <Link
                        to="/contact"
                        className="menu-item"
                        onClick={() => this.toggleOverlay()}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/store"
                        className="menu-item"
                        onClick={() => this.toggleOverlay()}
                    >
                        Store
                    </Link>
                </div>
            </nav>
        )
    }
}

/*

on click:
toggle
  which button rendered
  background overlay color
  which menu style to use
<img className='logo-image logo-mobile' src={half_logo} alt='logo'/>
*/
