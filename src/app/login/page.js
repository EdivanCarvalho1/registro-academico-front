import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-6xl bg-white rounded-xl">

        {/* Lado esquerdo - Logo Acadêmico */}
        <div className="flex items-center justify-center p-10 text-8xl ml-45">
          <h1 className="font-bold text-purple-900 leading-tight text-center">
            <Image
              alt="school icon"
              src="/school-icon.svg"
              width={240}
              height={240}
            />
          </h1>
        </div>

        {/* Lado direito - Formulário */}
        <div className="flex items-center justify-center p-10">
          <div className="bg-[#493159] w-96 p-10 pt-14 pb-14 rounded-3xl max-w-md min-h-[500px] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-center text-white mb-10 pb-10">
              Faça seu login
            </h2>
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Seu Nome Completo"
                className="bg-white p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black placeholder:text-[#493159]"
              />
              <input
                type="password"
                placeholder="Sua Senha"
                className="bg-white p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black placeholder:text-[#493159]"
              />
              <button
                type="submit"
                className="bg-[#65558f] hover:bg-[#69537a] text-white py-3 rounded-full font-semibold mt-9 w-1/2 self-center"
              ><Link href="/">Entrar</Link>
              </button>
            </form>
            <div className="text-center mt-6">
              <Link href="#" className="text-sm text-white underline">
                Esqueceu a sua senha?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
