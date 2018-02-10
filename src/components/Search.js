import React, { Component } from 'react';
import { Nav, NavItem, NavLink, button } from 'reactstrap';

class Search extends Component {
  render() {
    return (
      <div>
            <form className="form-inline mt-3">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    
    );
  }
}

export default Search;
