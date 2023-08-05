

function Header() {
	return (
		<>
			<header className="container d-flex align-items-center flex-row p-2">
				<a className="navbar-brand" href=" ">
					<a href=" " className="fw-bold m-0 fs-3 link-dark text-decoration-none">
						Travel
						<a href=" " className="ms-2 text-warning script-font text-decoration-none">
							Blog
						</a>
					</a>
				</a>
				<ul className="ms-5 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
					<li>
						<a className="nav-link px-2 link-dark" href=" ">
							About
						</a>
					</li>
					<li>
						<a className="nav-link px-2 link-dark" href=" ">
							Popular posts
						</a>
					</li>
				</ul>
			</header>
			<hr className="m-0" />
		</>
	);
}

export default Header;
