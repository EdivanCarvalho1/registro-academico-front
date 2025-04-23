export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Lado esquerdo - Logo Acadêmico */}
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-6xl font-bold !text-purple-900 leading-tight">
          Logo<br />Acadêmico
        </h1>
      </div>

      {/* Lado direito - Formulário */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-purple-800 p-10 pt-14 pb-14 rounded-3xl w-full max-w-md shadow-xl min-h-[500px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-white mb-10 pb-10">
            Faça seu login
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Seu Nome Completo"
              className="bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
            />
            <input
              type="password"
              placeholder="Sua Senha"
              className="bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 !rounded-full font-semibold !mt-9 w-1/2 self-center"
            >
              Entrar
            </button>
          </form>
          <div className="text-center mt-6">
            <a href="#" className="text-sm text-white hover:underline">
              Esqueceu a sua senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
