import Header from "@/components/login/Header";

export default function Page() {
  return (
    <div className="bg-[url('/logo.jpeg')] bg-cover bg-center h-screen">
      <Header />
      <div className="flex justify-center items-center">
        <form className="bg-white p-10 rounded-xl shadow-xl my-16">
          <h1 className="text-2xl font-semibold text-center">
            Silahkan login terlebih dahulu
          </h1>
          <div className="mt-6">
            <label htmlFor="username" className="block">
              Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
