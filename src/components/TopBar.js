import React from 'react';
import foto from '../assets/images/avatar.png';

function TopBar(){
    return(
        <React.Fragment>
				{/* Topbar */}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/* Sidebar Toggle (Topbar) */}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/* Topbar Navbar */}
					<ul className="navbar-nav ml-auto">

						{/* Nav Item - User Information */}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small"> Juan Gómez </span>
								<img className="img-profile rounded-circle" src={foto} alt="Juan Gomez - Creador de el ladrillo" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/* End of Topbar */}

        </React.Fragment>
    )
}
export default TopBar;