import React from "react";

const NavBar = ({totalCounters} = this.props) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="https://msaad.dev" className="navbar-brand">
          Navbar {" "}
          <span className="badge badge-pill badge-secondary">
              {totalCounters}
          </span>
        </a>
      </nav>
    );
}

export default NavBar;
