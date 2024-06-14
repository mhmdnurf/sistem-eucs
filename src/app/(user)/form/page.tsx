"use client";
import React from "react";
import Instruksi from "@/components/form/Instruksi";
import Header from "@/components/Header";

interface Statements {
  statement: string;
}

export default function Page() {
  const [statements, setStatements] = React.useState<Statements[]>([]);
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [form, setForm] = React.useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  async function getStatements() {
    const data = await fetch("/api/statements");
    const response = await data.json();
    setStatements(response.data);
  }

  React.useEffect(() => {
    getStatements();
  }, []);

  return (
    <>
      <div className="flex flex-col mx-20 align-middle">
        <div className="flex justify-center items-center flex-col mb-4">
          <Header title="Form Kuisioner" />
          <Instruksi />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-12 flex-col">
            <h1 className="text-xl font-semibold text-center">
              Informasi Responden
            </h1>
            <div className="flex flex-col my-2">
              <label
                htmlFor="nama_lengkap"
                className="font-medium mb-2 text-lg"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama_lengkap"
                id="nama_lengkap"
                className="p-2 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="nim" className="font-medium mb-2 text-lg">
                NIM
              </label>
              <input
                type="text"
                name="nim"
                id="nim"
                className="p-2 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="jurusan" className="font-medium mb-2 text-lg">
                Jurusan
              </label>
              <input
                type="text"
                name="jurusan"
                id="jurusan"
                className="p-2 border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col bg-slate-50 p-8 rounded-lg shadow border-4 border-slate-400 mb-8">
            <div className="">
              {statements.map((statement, index) => (
                <ul key={index} className="">
                  <li className="font-semibold text-lg">
                    {statement.statement}
                  </li>
                  <div className="flex my-4">
                    <input
                      type="radio"
                      name={`statement-${index}`}
                      id={`sts-${index}`}
                      value={1}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={`sts-${index}`}>Sangat Tidak Setuju</label>
                  </div>
                  <div className="flex my-4">
                    <input
                      type="radio"
                      name={`statement-${index}`}
                      id={`ts-${index}`}
                      value={2}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={`ts-${index}`}>Tidak Setuju</label>
                  </div>
                  <div className="flex my-4">
                    <input
                      type="radio"
                      name={`statement-${index}`}
                      id={`n-${index}`}
                      value={3}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={`n-${index}`}>Netral</label>
                  </div>
                  <div className="flex my-4">
                    <input
                      type="radio"
                      name={`statement-${index}`}
                      id={`s-${index}`}
                      value={4}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={`s-${index}`}>Setuju</label>
                  </div>
                  <div className="flex my-4">
                    <input
                      type="radio"
                      name={`statement-${index}`}
                      id={`st-${index}`}
                      value={5}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={`st-${index}`}>Sangat Setuju</label>
                  </div>
                </ul>
              ))}
            </div>
            <button
              type="submit"
              className={`${
                disabled ? "bg-slate-400" : "bg-slate-700"
              } p-2 rounded mt-4`}
              disabled={disabled}
            >
              <span className="text-xl text-white font-semibold">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
