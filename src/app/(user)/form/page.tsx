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
  responses?: {
    response: string;
    statement_id: number;
  }[];
}

export default function Page() {
  const [statements, setStatements] = React.useState<Statements[]>([]);

  const [form, setForm] = React.useState<Form>({});

  async function getStatements() {
    const data = await fetch("/api/statements");
    const response = await data.json();
    setStatements(response.data);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <form className="mx-20 flex flex-col">
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
          {statements.map((statement, index) => (
            <div key={index}>
              <p>{statement.statement}</p>
              <input
                type="radio"
                name={`statement-${index}`}
                id={`sts-${index}`}
                value={1}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [`statement-${index}`]: {
                      response: e.target.value,
                      statement_id: statement.id,
                    },
                  })
                }
              />
              <label htmlFor={`sts-${index}`}>Sangat Tidak Setuju</label>
              <input
                type="radio"
                name={`statement-${index}`}
                id={`ts-${index}`}
                value={2}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [`statement-${index}`]: {
                      response: e.target.value,
                      statement_id: statement.id,
                    },
                  })
                }
              />
              <label htmlFor={`ts-${index}`}>Tidak Setuju</label>
              <input
                type="radio"
                name={`statement-${index}`}
                id={`n-${index}`}
                value={3}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [`statement-${index}`]: {
                      response: e.target.value,
                      statement_id: statement.id,
                    },
                  })
                }
              />
              <label htmlFor={`n-${index}`}>Netral</label>
              <input
                type="radio"
                name={`statement-${index}`}
                id={`s-${index}`}
                value={4}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [`statement-${index}`]: {
                      response: e.target.value,
                      statement_id: statement.id,
                    },
                  })
                }
              />
              <label htmlFor={`s-${index}`}>Setuju</label>
              <input
                type="radio"
                name={`statement-${index}`}
                id={`st-${index}`}
                value={5}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [`statement-${index}`]: {
                      response: e.target.value,
                      statement_id: statement.id,
                    },
                  })
                }
              />
              <label htmlFor={`st-${index}`}>Sangat Setuju</label>
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
