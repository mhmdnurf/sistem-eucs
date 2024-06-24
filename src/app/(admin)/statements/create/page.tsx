"use client";

import Header from "@/components/Header";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface Variabel {
  id: number;
  nama_variabel: string;
}

export default function Page() {
  const router = useRouter();
  const [variabel, setVariabel] = useState<Variabel[]>([]);
  const [statement, setStatement] = useState("");
  const [variabelId, setVariabelId] = useState("");

  async function fetchVariabels() {
    try {
      const response = await fetch("/api/variabel");
      const responseData = await response.json();
      setVariabel(responseData.data);
      console.log(responseData.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchVariabels();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!statement || !variabelId) {
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
        body: JSON.stringify({ statement, variabel_id: variabelId }),
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
      <Header
        title="Tambah Pertanyaan"
        routeName="/statements"
        marginRight="mr-2"
      />
      <form
        onSubmit={handleSubmit}
        className="sm:mx-6 mx-4 border-4 sm:p-10 p-6 rounded-lg"
      >
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
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            className="border-2 rounded-sm sm:p-4 p-2 focus:ring-1 focus:outline-none focus:transform focus:ring-slate-300"
          />
          <label
            htmlFor="variabel_id"
            className="text-lg font-semibold text-slate-900 my-2"
          >
            Variabel
          </label>
          <select
            className="sm:p-4 p-2 bg-white border-2 rounded-sm focus:ring-1 focus:outline-none focus:transform focus:ring-slate-300"
            name="variabel_id"
            value={variabelId}
            onChange={(e) => setVariabelId(e.target.value)}
          >
            <option value="">Select Variabel</option>
            {variabel.map((variabel) => (
              <option key={variabel.id} value={variabel.id}>
                {variabel.nama_variabel.charAt(0).toUpperCase() +
                  variabel.nama_variabel.slice(1)}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={!statement || !variabelId}
            className="sm:mt-6 mt-4 bg-slate-700 sm:p-4 p-2 rounded-lg focus:ring-4 focus:transform focus:ring-slate-300 disabled:bg-slate-500"
          >
            <span className="text-lg text-white font-semibold">Submit</span>
          </button>
        </div>
      </form>
    </>
  );
}
