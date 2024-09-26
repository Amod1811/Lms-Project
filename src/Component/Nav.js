import React from 'react'

const Nav = () => {
  return (
    <div>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Cources<span className="caret" /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Networking</a></li>
            <li><a href="#">Frontend</a></li>
            <li><a href="#">Backend</a></li>
            <li><a href="#">Graphics</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </li>
        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Packages<span className="caret" /></a>
        <ul className="dropdown-menu">
            <li><a href="#">MERN </a></li>
            
          </ul>
        </li>
      </ul>
      <form className="navbar-form navbar-left" action="/action_page.php">
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Search" name="search" />
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
      </ul>
    </div>
  </nav>
</div>

  )
}

export default Nav

