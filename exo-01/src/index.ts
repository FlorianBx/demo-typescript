import { User } from './types';

function getUserInfo(user: User): string {
	return `User ${user.name} has the email ${user.email}.`;
}

const user1: User = {
	id: 1,
	name: 'Alice',
	email: 'w5fXs@example.com',
};

console.log(getUserInfo(user1));
