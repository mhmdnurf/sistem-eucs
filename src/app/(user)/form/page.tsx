"use client";
import React, { Suspense } from "react";
import Instruksi from "@/components/form/Instruksi";
import Header from "@/components/Header";
import Swal from "sweetalert2";
import { RotatingLines } from "react-loader-spinner";
import Loading from "./loading";

interface Statements {
  id: number;
  statement: string;
}
interface Form {
  nama_lengkap?: string;
  nim?: string;
  jurusan?: string;
  responses: {
    response: string;
    statement_id: number;
  }[];
}

export default function Page() {
  const [statements, setStatements] = React.useState<Statements[]>([]);
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<Form>({ responses: [] });

  async function getStatements() {
    const data = await fetch("/api/statements");
    const response = await data.json();
    setStatements(response.data);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    setInterval(() => {
      setIsSubmit(false);
    }, 5000);
    // try {
    //   const response = await fetch("/api/responses", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const result = await response.json();
    //   console.log(result);

    //   Swal.fire({
    //     icon: "success",
    //     title: "Terima kasih atas partisipasi anda!",
    //     text: "Jawaban anda berhasil disimpan",
    //     showConfirmButton: true,
    //     timer: 1500,
    //   });
    // } catch (error) {
    //   console.error("There was a problem with your fetch operation:", error);

    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",
    //     showCloseButton: true,
    //   });
    // } finally {
    //   setIsSubmit(false);
    // }
  };

  const handleResponseChange = (statement_id: number, response: string) => {
    setForm((prevForm) => {
      const existingResponseIndex = prevForm.responses.findIndex(
        (r) => r.statement_id === statement_id
      );
      let updatedResponses = [...prevForm.responses];

      if (existingResponseIndex >= 0) {
        updatedResponses[existingResponseIndex] = { statement_id, response };
      } else {
        updatedResponses.push({ statement_id, response });
      }

      return { ...prevForm, responses: updatedResponses };
    });
  };

  React.useEffect(() => {
    getStatements();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center items-center flex-col">
          <Header title="Form Kuisioner" />
          <Instruksi />
        </div>
        <form
          onSubmit={handleSubmit}
          className="sm:mx-40 sm:px-16 sm:pt-16 mx-6 px-6 pt-6 sm:rounded-xl rounded-lg border-4 mb-20 bg-slate-100 flex flex-col justify-center"
        >
          <label htmlFor="nama_lengkap" className="font-medium">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama_lengkap"
            id="nama_lengkap"
            className="border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2 mb-4"
            onChange={(e) => setForm({ ...form, nama_lengkap: e.target.value })}
          />
          <label htmlFor="nim" className="font-medium">
            NIM
          </label>
          <input
            type="text"
            name="nim"
            id="nim"
            className="border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2 mb-4"
            onChange={(e) => setForm({ ...form, nim: e.target.value })}
          />
          <label htmlFor="jurusan" className="font-medium">
            Jurusan
          </label>
          <input
            type="text"
            name="jurusan"
            id="jurusan"
            className="border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2 mb-4"
            onChange={(e) => setForm({ ...form, jurusan: e.target.value })}
          />
          <Suspense fallback={<Loading />}>
            {statements.map((statement) => (
              <div key={statement.id}>
                <p className="my-2 font-semibold text-lg">
                  {statement.statement}
                </p>
                <div className="flex my-2">
                  <input
                    type="radio"
                    name={`statement-${statement.id}`}
                    id={`sts-${statement.id}`}
                    value="1"
                    className="mr-2 w-6 h-6 cursor-pointer border border-slate-200 rounded-full focus:outline-none"
                    onChange={(e) =>
                      handleResponseChange(statement.id, e.target.value)
                    }
                  />
                  <label htmlFor={`sts-${statement.id}`}>
                    Sangat Tidak Setuju
                  </label>
                </div>
                <div className="flex my-2">
                  <input
                    type="radio"
                    name={`statement-${statement.id}`}
                    id={`ts-${statement.id}`}
                    value="2"
                    className="mr-2 w-6 h-6 cursor-pointer border border-slate-200 rounded-full focus:outline-none"
                    onChange={(e) =>
                      handleResponseChange(statement.id, e.target.value)
                    }
                  />
                  <label htmlFor={`ts-${statement.id}`}>Tidak Setuju</label>
                </div>
                <div className="flex my-2">
                  <input
                    type="radio"
                    name={`statement-${statement.id}`}
                    id={`n-${statement.id}`}
                    value="3"
                    className="mr-2 w-6 h-6 cursor-pointer border border-slate-200 rounded-full focus:outline-none"
                    onChange={(e) =>
                      handleResponseChange(statement.id, e.target.value)
                    }
                  />
                  <label htmlFor={`n-${statement.id}`}>Netral</label>
                </div>
                <div className="flex my-2">
                  <input
                    type="radio"
                    name={`statement-${statement.id}`}
                    id={`s-${statement.id}`}
                    value="4"
                    className="mr-2 w-6 h-6 cursor-pointer border border-slate-200 rounded-full focus:outline-none"
                    onChange={(e) =>
                      handleResponseChange(statement.id, e.target.value)
                    }
                  />
                  <label htmlFor={`s-${statement.id}`}>Setuju</label>
                </div>
                <div className="flex my-2">
                  <input
                    type="radio"
                    name={`statement-${statement.id}`}
                    id={`st-${statement.id}`}
                    value="5"
                    className="mr-2 w-6 h-6 cursor-pointer border border-slate-200 rounded-full focus:outline-none"
                    onChange={(e) =>
                      handleResponseChange(statement.id, e.target.value)
                    }
                  />
                  <label htmlFor={`st-${statement.id}`}>Sangat Setuju</label>
                </div>
              </div>
            ))}
          </Suspense>
          <button
            type="submit"
            className="p-3 bg-slate-700 my-8 sm:rounded rounded-lg"
          >
            <span className="text-white font-semibold">
              {isSubmit ? (
                <div className="flex justify-center items-center">
                  <RotatingLines
                    visible={true}
                    animationDuration="0.75"
                    strokeWidth="5"
                    width="30"
                    strokeColor="white"
                  />
                </div>
              ) : (
                "Submit"
              )}
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
