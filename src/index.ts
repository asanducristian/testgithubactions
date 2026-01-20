// Intentionally poorly formatted code - watch Prettier fix it on commit!

interface User {
    name: string;
    age: number;
    email: string;
}

const users: User[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
];

function greetUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const processUsers = (users: User[]) => {
    return users.map((user) => {
        const greeting = greetUser(user);
        return {
            ...user,
            processed: true,
            greeting: greeting,
        };
    });
};

const result = processUsers(users);
console.log('Processed users:', result);
