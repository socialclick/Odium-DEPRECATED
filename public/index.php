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
							onclick="login()"
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

		<script src="src/js/socket.io.js"></script>
		<script src="src/js/jquery-3.3.1.min.js"></script>
		<script src="src/js/popper.min.js"></script>
		<script src="src/js/bootstrap.min.js"></script>
		<!-- <script src="src/js/mdb.min.js"></script> -->
		<script src="src/js/addons/bootstrap-select.min.js"></script>
		<script src="src/js/index.js"></script>
	</body>
</html>
