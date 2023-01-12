function NavigationBarMenu(){
    return(

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tickets">Tickets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="aboutus">Over Ons</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact">Contact</a>
                </li>
            </ul>
            <ul className="navbar-nav text-right user">
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-md btn-outline-dark">Login</button>
                </li>
            </ul>

    )

}