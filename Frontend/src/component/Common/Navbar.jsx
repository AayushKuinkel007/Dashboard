import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='container-fluid p-1'>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Img</h3>
                </div>
                <div className='col-md-4'>
                    <ul className='d-flex justify-content-center'>
                        <li className='ms-3' style={{listStyle:"none"}}>Home</li>
                        <li className='ms-3' style={{listStyle:"none"}}>About us</li>
                        <li className='ms-3' style={{listStyle:"none"}}>Contact us</li>
                    </ul>
                </div>
                <div className='col-md-4 d-flex justify-content-end'>
                    <Link to='/login' className='btn btn-primary'>
                        Login
                    </Link>
                    <Link to='/signup' className='btn btn-success ms-3'>
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar