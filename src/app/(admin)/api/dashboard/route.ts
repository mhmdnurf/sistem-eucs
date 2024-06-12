import { addPost, fetchUsers, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

// export const GET = async (req: Request, res: Response) => {
//   try {
//     const posts = getPosts();
//     return NextResponse.json(
//       { message: "Data berhasil didapatkan", data: posts },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// };

export const GET = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    return NextResponse.json(
      { message: "Data berhasil didapatkan", data: users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, content } = await req.json();
  try {
    const post = { id: Math.random().toString(), title, content };
    addPost(post);
    return NextResponse.json(
      { message: "Data berhasil ditambahkan", data: post },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
