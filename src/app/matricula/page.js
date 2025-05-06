import { CiCircleChevLeft } from "react-icons/ci";
import DadosPessoais from "./components/dados_pessoais";
import Header from "./components/header/header";
import Documentos from "./components/documentos";
import Endereco from "./components/endereco";
import DadosAcademicos from "./components/dados_academicos";
import InformacoesEspecificas from "./components/informacoes_especificas";
import SituacaoSocioeconomica from "./components/situacao_socioeconomica";
import DocumentosEnviados from "./components/documentos._enviados";

export default function Matricula() {
  return (
    <div>
        
      <Header />

      <div className="px-5 py-3 bg-white text-black">
        <div className="flex items-center mb-4" style={{ height: "70px" }}>
          <CiCircleChevLeft className="h-9 w-9 pb-2" />
          <h1 className="text-3xl uppercase ml-4">Matrícula de novo aluno</h1>
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
            <a href="#" className="bg-[#b697e8] text-white py-2 px-4 rounded-md hover:bg-[#9a7dbf]">Editar</a>
            <a href="#" className="bg-[#f9cf64] text-white py-2 px-4 rounded-md hover:bg-[#e1b64d]">Solicitar Alteração de Documento</a>
            <a className="button bg-[#3ddb47] rounded-md hover:bg-[#e1b64d] text-white py-2 px-4 rounded-md" type="submit" value="Confirmar" />
          </div>
        </form>
      </div>5
    </div>
  );
}
