<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link
			href="https://fonts.googleapis.com/css?family=Roboto"
			rel="stylesheet"
		/>
		<link rel="stylesheet" href="src/css/bootstrap.min.css" />
		<!-- <link rel="stylesheet" href="src/css/mdb.min.css" /> -->
		<link rel="stylesheet" href="src/css/addons/bootstrap-select.min.css" />
		<link rel="stylesheet" href="src/css/index.css" />
		<title>Odium - The Discord Bot</title>
	</head>
	<body>
		<noscript
			>You need to enable JavaScript to use Odium Admin Panel.</noscript
		>
		<nav class="navbar navbar-expand navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img
						src="src/img/bot_logo.png"
						height="30"
						class="d-inline-block align-top"
					/>
					Odium
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav mr-auto">
						<li class="nav-item ">
							<a
								class="nav-link"
								href="https://discord.gg/J4CN9Wv"
								target="_BLANK"
								>Support</a
							>
						</li>
					</ul>
				</div>
				<form class="form-inline my-2 my-lg-0">
					<div class="dropdown">
						<button
							class="btn btn-primary"
							type="button"
							onclick="doLogin()"
							id="accountDropdownButton"
							data-toggle="dropdown"
						>
							Login
						</button>
						<div
							class="dropdown-menu"
							id="accountDropdown"
							style="display:none"
						>
							<a class="dropdown-item" href="#">Dashboard</a>
							<a class="dropdown-item" href="#">Logout</a>
						</div>
					</div>
				</form>
			</div>
		</nav>
		<main role="main">
			<section class="jumbotron text-center">
				<div class="container">
					<h1 class="jumbotron-heading">Album example</h1>
					<p class="lead text-muted">
						Something short and leading about the collection
						below—its contents, the creator, etc. Make it short and
						sweet, but not too short so folks don't simply skip over
						it entirely.
					</p>
					<p>
						<a href="#" class="btn btn-primary my-2"
							>Main call to action</a
						>
						<a href="#" class="btn btn-secondary my-2"
							>Secondary action</a
						>
					</p>
				</div>
			</section>

			<div class="album py-5 bg-light">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									style="height: 225px; width: 100%; display: block;"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbce%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbce%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbd2%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbd2%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbd4%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbd4%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbd5%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbd5%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbd6%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbd6%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbd6%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbd6%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbd7%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbd7%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbdb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbdb%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card mb-4 box-shadow">
								<img
									class="card-img-top"
									data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
									alt="Thumbnail [100%x225]"
									src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a4b60cbdc%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a4b60cbdc%22%3E%3Crect%20width%3D%22208%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.9375%22%20y%3D%22117.9171875%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
									data-holder-rendered="true"
									style="height: 225px; width: 100%; display: block;"
								/>
								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<footer class="text-muted">
			<div class="container">
				<p class="float-right">
					<a href="#">Back to top</a>
				</p>
				<p>
					Album example is © Bootstrap, but please download and
					customize it for yourself!
				</p>
				<p>
					New to Bootstrap? <a href="../../">Visit the homepage</a> or
					read our
					<a href="../../getting-started/">getting started guide</a>.
				</p>
			</div>
		</footer>

		<script src="src/js/js.cookie.js"></script>
		<script src="src/js/socket.io.js"></script>
		<script src="src/js/jquery-3.3.1.min.js"></script>
		<script src="src/js/popper.min.js"></script>
		<script src="src/js/bootstrap.min.js"></script>
		<!-- <script src="src/js/mdb.min.js"></script> -->
		<script src="src/js/addons/bootstrap-select.min.js"></script>
		<script src="src/js/index.js"></script>
	</body>
</html>
