export interface UserData {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    createdAt: number;
}

export interface PostData {
    title: string;
    author: string;
    views: number;
    createdAt: number;
}

export function generateUsers(count: number): UserData[] {
    const users: UserData[] = new Array(count);
    const now = Date.now();
    for (let i = 0; i < count; i++) {
        users[i] = {
            name: `User_${i}`,
            age: 18 + (i % 50),
            email: `user${i}@example.com`,
            isActive: i % 3 !== 0,
            createdAt: now + i,
        };
    }
    return users;
}

export function generatePosts(count: number): PostData[] {
    const posts: PostData[] = new Array(count);
    const now = Date.now();
    const authors = ["alice", "bob", "charlie", "dave", "eve"];
    for (let i = 0; i < count; i++) {
        posts[i] = {
            title: `Post_${i}`,
            author: authors[i % authors.length],
            views: i % 10000,
            createdAt: now + i,
        };
    }
    return posts;
}
