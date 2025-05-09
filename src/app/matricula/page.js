import { CiCircleChevLeft } from "react-icons/ci";
import DadosPessoais from "./components/dados_pessoais";
import Header from "./components/header/header";
import Documentos from "./components/documentos";
import Endereco from "./components/endereco";
import DadosAcademicos from "./components/dados_academicos";
import InformacoesEspecificas from "./components/informacoes_especificas";
import SituacaoSocioeconomica from "./components/situacao_socioeconomica";
import DocumentosEnviados from "./components/documentos._enviados";
import Link from "next/link";

export default function Matricula() {
  return (
    <div>

      <Header />

      <div className="px-5 py-3 bg-white text-[#493159]">
        <div className="flex items-center ml-4 mb-4" style={{ height: "70px" }}>
          <a href="/matricula-registro">
            <CiCircleChevLeft className="ml-4 h-9 w-9 pb-2" />
          </a>
          <h1 className="text-3xl uppercase ml-1 pb-2 font-bold">Matrícula de novo aluno</h1>
        </div>

        <form>
          <DadosPessoais />
          <Documentos />
          <Endereco />
          <DadosAcademicos />
          <InformacoesEspecificas />
          <SituacaoSocioeconomica />
          <DocumentosEnviados />

          <div className="flex justify-end items-center w-full h-[100px] gap-4 mt-4">
            <Link to="#" className="bg-[#b697e8] text-white py-2 px-4 rounded-md hover:bg-[#9a7dbf]">Editar</Link>
            <Link to="#" className="bg-[#f9cf64] text-white py-2 px-4 rounded-md hover:bg-[#e1b64d]">Solicitar Alteração de Documento</Link>
            <Link to="#" className=" bg-[#afc272] rounded-md  text-white py-2 px-4 " type="submit" value="Confirmar">Confirmar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
