import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#a">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className="weblogo"></img>
                        <img src="https://pn-paul.netlify.app/image/logo-for-mobile.png" alt="" className="moblogo"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link ">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/brand" className="nav-link" >Brand</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ourteam" className="nav-link" >Ourteam</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pressrelease" className="nav-link" >Pressrelease</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/carrier" className="nav-link" >Carrier</Link>
                            </li>
                            <li className='nav-item'>
                                <button className='btn text-white' style={{ border: '1px  solid orange' }}>FRANCHIES</button>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header