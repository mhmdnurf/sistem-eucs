interface Header {
  title: string;
}

export default function Header({ title }: Header) {
  return (
    <>
      <div className="sm:p-6">
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
    </>
  );
}
