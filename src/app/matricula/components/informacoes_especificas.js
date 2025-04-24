"use client"
import DisabledInput from './input/disabled_input';
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function InformacoesEspecificas(){
    return(
        <div className="pl-5">

            <h2 className="fs-5">5. Informaçoes Específicas</h2>

            <div className='d-flex p-3 flex-column mb-4' style={{width: '100%'}}>
                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "25%"}}>
                        <DisabledInput 
                            id="deficiencia"
                            type="text"
                            label="Possui Deficiencia?"
                            placeholder="Nome da Deficiencia"
                        />
                    </div>
                    <div style={{width: "40%"}}>
                        <DisabledInput 
                            id="necessidade_especifica"
                            type="text"
                            label="Possui Necessidade Específica?"
                            placeholder="Nome da necessidade"
                        />
                    </div>
                    <div style={{width: "20%"}}>
                        <DisabledInput 
                            id="alergia"
                            type="text"
                            label="Possui alergia?"
                            placeholder="Nome da Alergia"
                        />
                    </div>
                    <div style={{width: "15%"}}>
                        <Input 
                            id="tipo_sang"
                            type="text"
                            label="Tipo Sanguíneo"
                            placeholder="X"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}