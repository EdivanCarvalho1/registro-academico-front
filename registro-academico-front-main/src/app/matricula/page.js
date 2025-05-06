import { Form } from "react-bootstrap";
import DadosPessoais from "./components/dados_pessoais";
import Header from "./components/header/header"
import { CiCircleChevLeft } from "react-icons/ci";
import Documentos from "./components/documentos";
import Endereco from "./components/endereco";
import DadosAcademicos from "./components/dados_academicos";
import InformacoesEspecificas from "./components/informacoes_especificas";
import SituacaoSocioeconomica from "./components/situacao_socioeconomica";
import DocumentosEnviados from "./components/documentos._enviados";

export default function Matricula(){
    return(
        <div>
            
            <Header />

            <div className="px-5 py-3 bg-white text-black">

                <div className="d-flex align-items-center mb-4" style={{ height: '70px'}}>
                    <CiCircleChevLeft style={{ height: '35px', width: '35px', paddingBottom: '10px' }} />
                    <h1 className="fs-3 text-uppercase">Matrícula de novo aluno</h1>
                </div>

                <Form>
                    <DadosPessoais />
                    <Documentos />
                    <Endereco />
                    <DadosAcademicos />
                    <InformacoesEspecificas />
                    <SituacaoSocioeconomica />
                    <DocumentosEnviados />

                    <div className="d-flex justify-content-end align-items-center" style={{width: '100%', height: '100px'}}>
                            <a href='#' className="button" style={{backgroundColor: '#b697e8'}}>Editar</a>
                            <a href='#' className="button" style={{backgroundColor: '#f9cf64'}}>Solicitar Alteraçao de Documento</a>
                            <input className="button" type='submit' style={{backgroundColor: '#aec171'}}value="Confirmar" />
                    </div>
                </Form>

            </div>

        </div>
    )
}