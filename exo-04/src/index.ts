import { User } from './types';

export async function fetchUserData(): Promise<User> {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); 

	return await response.json();
}

async function displayUser() {
	const user = await fetchUserData();
	console.log(user);
}

displayUser();
