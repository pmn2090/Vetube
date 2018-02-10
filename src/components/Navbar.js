import React, { Component } from 'react';
import { Nav, NavItem, NavLink, button } from 'reactstrap';
import Search from './Search';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
      <div className="row mt-5 ">
        
            <div className="col-3 ">
              <img width="75%" src="https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg" alt=""/>
            </div>
            <Search className="col-3 justify-content-start"/>
            <Nav className="col-4 justify-content-end ">
                        <NavItem>
                          <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">Trending</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">History</NavLink>
                        </NavItem>
            </Nav>
                    <div className="col-2 justify-content-end">
                        <button type="button" class="btn btn-danger">Sign in</button>
                    </div>
          
          </div>
        </div>
    
    );
  }
}

export default Navbar;
