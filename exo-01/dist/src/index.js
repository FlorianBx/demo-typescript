export function getUserInfo(user) {
    return `User ${user.name} has the email ${user.email}.`;
}
const user1 = {
    id: 1,
    name: 'Alice',
    email: 'w5fXs@example.com',
};
console.log(getUserInfo(user1));
