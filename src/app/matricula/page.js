import DadosPessoais from "./components/dados_pessoais";
import Header from "./components/header/header"
import { CiCircleChevLeft } from "react-icons/ci";

export default function Matricula(){
    return(
        <div>

            <Header />

            <div className="px-5 py-3 bg-white text-black">

                <div className="d-flex align-items-center" style={{ height: '70px'}}>
                    <CiCircleChevLeft style={{ height: '35px', width: '35px', paddingBottom: '10px' }} />
                    <h1 className="fs-3 text-uppercase">Matrícula de novo aluno</h1>
                </div>

                <DadosPessoais />

            </div>

        </div>
    )
}