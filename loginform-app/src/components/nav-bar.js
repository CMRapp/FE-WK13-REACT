import React from 'react'

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark nav-pills'>
          <div className='container'>
              <a className='navbar-brand' href='http://localhost:3000/'>
                  <img src='./bb-fl-logo.png' alt='Beer Buddy FL Logo'/>
              </a>
          
              <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
              </button>

              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                  <ul className='navbar-nav navbar-nav me-auto mb-2 mb-sm-0'>
                      <li className='nav-item'>
                          <a className='nav-link active' aria-current='page' href='http://localhost:3000/'>Home</a>
                      </li>
                      <li className='nav-item'>
                          <a className='nav-link' href='http://localhost:3000/'>Breweries</a>
                      </li>
                      <li className='nav-item'>
                          <a className='nav-link' href='http://localhost:3000/'>Beers</a>
                      </li>
                      <li className='nav-item'>
                          <a className='nav-link' href='http://localhost:3000/'>Styles</a>
                      </li>            
                      <li className='nav-item'>
                          <a className='nav-link' href='http://localhost:3000/'>Contact</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='http://localhost:3000/'>Submit A Beer</a>
                    </li>

                  </ul>
                  <form className='d-flex' role='search'>
                      <input className='form-control me-2' type='search' placeholder='Search is inactive' aria-label='Search'/>
                      <button className='btn btn-outline-success' type='submit'>Search</button>
                  </form>
              </div>
          </div>
      </nav>
        )
    }
}