<div class="dashboard">
	<div class="row container" id="guildList"></div>
	<div class="settings" id="wrapper" style="display: none">
		<div class="bg-light border-right" id="sidebar-wrapper">
			<div class="sidebar-heading">Dashboard</div>
			<ul
				class="nav nav-tabs list-group list-group-flush"
				id="sidebarTabs"
				role="tablist"
			>
				<a
					class="nav-link active list-group-item list-group-item-action bg-light"
					id="settings-tab"
					data-toggle="tab"
					href="#settings"
					>Settings</a
				>
				<a
					class="nav-link list-group-item list-group-item-action bg-light"
					id="commands-tab"
					data-toggle="tab"
					href="#commands"
					>Commands</a
				>
				<a
					class="nav-link list-group-item list-group-item-action bg-light"
					id="help-tab"
					data-toggle="tab"
					href="#help"
					>Help</a
				>
			</ul>
		</div>
		<div id="page-content-wrapper">
			<div class="tab-content container" id="myTabContent">
				<div class="tab-pane fade show active" id="settings">
					<h3 class="text-center m-3">Settings</h3>
					Welcome Msg:
					<select class="textchannels" data-live-search="true">
					</select>
				</div>
				<div class="tab-pane fade" id="commands">
					<h3 class="text-center m-3">Commands</h3>
				</div>
				<div class="tab-pane fade" id="help">
					<h3 class="text-center m-3">Help</h3>
				</div>
			</div>
		</div>
	</div>
</div>
