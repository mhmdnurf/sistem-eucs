"use client";

import Header from "@/components/Header";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const statement = formData.get("statement") as string;
    const variabel = formData.get("variabel") as string;

    if (!statement || !variabel) {
      Swal.fire({
        icon: "error",
        title: "Validation Error!",
        text: "Pertanyaan dan variabel harus diisi!",
      });
      return;
    }

    try {
      const response = await fetch("/api/statements", {
        method: "POST",
        body: JSON.stringify({ statement, variabel }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: responseData.message,
        }).then(() => {
          router.push("/statements");
          router.refresh();
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Data gagal ditambahkan!",
      });
    }
  };

  return (
    <>
      <Header title="Tambah Pertanyaan" />
      <form onSubmit={handleSubmit} className="mx-6 border-4 p-10 rounded-lg">
        <div className="flex flex-col">
          <label
            htmlFor="statement"
            className="text-lg font-semibold text-slate-900 my-2"
          >
            Isi Pertanyaan
          </label>
          <input
            type="text"
            id="statement"
            name="statement"
            className="border-2 rounded-sm p-4 focus:ring-1 focus:outline-none focus:transform focus:ring-slate-300"
          />
          <label
            htmlFor="variabel"
            className="text-lg font-semibold text-slate-900 my-2"
          >
            Variabel
          </label>
          <select
            className="sm:p-4 bg-white border-2 rounded-sm focus:ring-1 focus:outline-none focus:transform focus:ring-slate-300"
            name="variabel"
          >
            <option value="content">Content</option>
            <option value="accuracy">Accuracy</option>
            <option value="format">Format</option>
            <option value="eout">Ease of Use and Timeliness</option>
            <option value="kepuasan">Kepuasan Pengguna</option>
          </select>
          <button
            type="submit"
            className="mt-6 bg-slate-700 sm:p-4 rounded-lg focus:ring-4 focus:transform focus:ring-slate-300"
          >
            <span className="text-lg text-white font-semibold">Submit</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
