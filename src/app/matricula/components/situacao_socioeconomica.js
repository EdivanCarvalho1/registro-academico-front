"use client"
import { Form } from 'react-bootstrap';
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function SituacaoSocioeconomica(){
    return(
        <div className="pl-5">

            <h2 className="fs-5">6. Situaçao Socioeconomica</h2>

            <div className='d-flex p-3 flex-column mb-4' style={{width: '100%'}}>
                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "30%"}}>
                        <Input 
                            id="renda"
                            type="text"
                            label="Renda Per Capta"
                            placeholder="XX salários mínimos"
                        />
                    </div>
                    <div style={{width: "40%"}}>
                        <Input 
                            id="profissao"
                            type="text"
                            label="Profissao do Aluno"
                        />
                    </div>
                    <div style={{width: "30%"}}>
                        <Input 
                            id="familiares"
                            type="number"
                            label="Familiares Morando Junto"
                            placeholder="00"
                        />
                    </div>
                    {/* Tirei o campo de etnia pois ele já está presente na primeira parte do formulário */}
                </div>

                <div className='d-flex justify-content-between pr-4 mb-3' style={{width: '100%'}}>
                    <Form.Check
                        type="switch"
                        id="cuntr-renda"
                        label="Contribui para a renda familiar?"
                        reverse
                    />
                    <Form.Check
                        type="switch"
                        id="filhos"
                        label="Possui filhos?"
                        reverse
                    />
                </div>

                <div className='d-flex justify-content-between pr-4 mb-3' style={{width: '100%'}}>
                    <Form.Check
                        type="switch"
                        id="desp_hosp"
                        label="Possui despezas hospitalares?"
                        reverse
                    />
                    <Form.Check
                        type="switch"
                        id="desp_transp"
                        label="Possui despezas com transporte?"
                        reverse
                    />
                </div>

                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "35%"}}>
                        <Input 
                            id="forma_ingresso"
                            type="text"
                            label="Forma de Ingresso"
                            placeholder="XXXX-XXXX-XXXX0"
                        />
                    </div>
                    <div style={{width: "35%"}}>
                        <Input 
                            id="ens_med"
                            type="text"
                            label="Onde Cursou o Ensino Médio"
                            placeholder="Nome da Escola"
                        />
                    </div>
                    <div style={{width: "30%"}}>
                        <Input 
                            id="concl_end_med"
                            type="number"
                            label="Ano de Conclusao"
                            placeholder="0000"
                        />
                    </div>
                </div>
            </div>
        
        </div>
    )
}