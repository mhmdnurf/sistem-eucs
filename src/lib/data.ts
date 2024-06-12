import { sql } from "@vercel/postgres";
interface Post {
  id: string;
  title: string;
  content: string;
}

let posts: Post[] = [];

export const getPosts = () => posts;

export const addPost = (post: Post) => {
  posts.push(post);
};

export async function fetchUsers() {
  try {
    const data = await sql`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Error fetching users");
  }
}
