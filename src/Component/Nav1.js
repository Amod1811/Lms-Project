import React from 'react'

const Nav1 = () => {
  return (
  
      <div>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret" /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
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

export default Nav1
