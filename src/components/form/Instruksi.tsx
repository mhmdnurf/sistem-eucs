export default function Instruksi() {
  return (
    <>
      <div className="bg-slate-100 p-4 rounded-md">
        <h1>Poin Penilaian</h1>
        <p className="mb-4">
          Ada lima alternatif untuk menjawab pernyataan dengan keterangan
          berikut:
        </p>
        <ul className="">
          <li>Sangat Tidak Setuju (STS) = 1</li>
          <li>Tidak Setuju (TS) = 2</li>
          <li>Netral (N) = 3</li>
          <li>Setuju (S) = 4</li>
          <li>Sangat Setuju (ST) = 5</li>
        </ul>
      </div>
    </>
  );
}
