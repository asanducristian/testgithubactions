// Intentionally poorly formatted code - watch Prettier fix it on commit!

interface User {
    name: string;
    age: number;
    email: string;
}

interface ProcessedUser extends User {
    processed: true;
    greeting: string;
    isAdult: boolean;
}

const users: User[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
];

function greetUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} year old.`;
}

const isValidUser = (user: User): boolean => {
    return user.name.trim().length > 0 && user.age > 0 && user.email.includes('@');
};

const summarizeUsers = (users: User[]) => {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return {
        count: users.length,
        averageAge: users.length === 0 ? 0 : Math.round(totalAge / users.length),
    };
};

const processUsers = (users: User[]): ProcessedUser[] => {
    return users.filter(isValidUser).map((user) => {
        const greeting = greetUser(user);
        return {
            ...user,
            processed: true,
            greeting,
            isAdult: user.age >= 18,
        };
    });
};

const result = processUsers(users);
const summary = summarizeUsers(result);
console.log('Processed users:', result);
console.log('Summary:', summary);
