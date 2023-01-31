export default function EmployeeNavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="employee-pages/employee#">My Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="medewerker">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="medewerker/artists">Artists</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="medewerker/employee#">Shows</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="medewerker/bands">Bands</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="medewerker/code-validatie">Aanwezigheidscheck</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}