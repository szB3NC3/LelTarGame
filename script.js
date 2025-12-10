var loggedIn = false

if (!loggedIn) {
	document.getElementById("account-section").innerHTML = `
		<button class="btn btn-outline-secondary">Login</button>
		<button class="btn btn-outline-success">Register</button>
	`
}