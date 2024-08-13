import { getUsers } from "./userService.js";

async function displayUser() {
	const user = await getUsers();
	console.log(user);
}

displayUser();
