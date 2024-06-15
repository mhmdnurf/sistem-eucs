"use client";
import React from "react";
import Instruksi from "@/components/form/Instruksi";
import Header from "@/components/Header";

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
  const [form, setForm] = React.useState<Form>({ responses: [] });

  async function getStatements() {
    const data = await fetch("/api/statements");
    const response = await data.json();
    setStatements(response.data);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
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
        <div className="flex justify-center items-center flex-col mb-4">
          <Header title="Form Kuisioner" />
          <Instruksi />
        </div>
        <form onSubmit={handleSubmit} className="mx-20 flex flex-col">
          <label htmlFor="nama_lengkap">Nama Lengkap</label>
          <input
            type="text"
            name="nama_lengkap"
            id="nama_lengkap"
            className="border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setForm({ ...form, nama_lengkap: e.target.value })}
          />
          <label htmlFor="nim">NIM</label>
          <input
            type="text"
            name="nim"
            id="nim"
            className="border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setForm({ ...form, nim: e.target.value })}
          />
          <label htmlFor="jurusan">Jurusan</label>
          <input
            type="text"
            name="jurusan"
            id="jurusan"
            className="border-2 border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setForm({ ...form, jurusan: e.target.value })}
          />
          {statements.map((statement) => (
            <div key={statement.id}>
              <p>{statement.statement}</p>
              <input
                type="radio"
                name={`statement-${statement.id}`}
                id={`sts-${statement.id}`}
                value="1"
                onChange={(e) =>
                  handleResponseChange(statement.id, e.target.value)
                }
              />
              <label htmlFor={`sts-${statement.id}`}>Sangat Tidak Setuju</label>
              <input
                type="radio"
                name={`statement-${statement.id}`}
                id={`ts-${statement.id}`}
                value="2"
                onChange={(e) =>
                  handleResponseChange(statement.id, e.target.value)
                }
              />
              <label htmlFor={`ts-${statement.id}`}>Tidak Setuju</label>
              <input
                type="radio"
                name={`statement-${statement.id}`}
                id={`n-${statement.id}`}
                value="3"
                onChange={(e) =>
                  handleResponseChange(statement.id, e.target.value)
                }
              />
              <label htmlFor={`n-${statement.id}`}>Netral</label>
              <input
                type="radio"
                name={`statement-${statement.id}`}
                id={`s-${statement.id}`}
                value="4"
                onChange={(e) =>
                  handleResponseChange(statement.id, e.target.value)
                }
              />
              <label htmlFor={`s-${statement.id}`}>Setuju</label>
              <input
                type="radio"
                name={`statement-${statement.id}`}
                id={`st-${statement.id}`}
                value="5"
                onChange={(e) =>
                  handleResponseChange(statement.id, e.target.value)
                }
              />
              <label htmlFor={`st-${statement.id}`}>Sangat Setuju</label>
            </div>
          ))}
          <button type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  );
}
