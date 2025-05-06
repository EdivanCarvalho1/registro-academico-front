"use client"
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function DadosAcademicos(){
    return(
        <div className="pl-5">

            <h2 className="fs-5">4. Dados Acedemicos</h2>
    
            <div className='d-flex p-3 flex-column mb-4' style={{width: '100%'}}>
                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "20%"}}>
                        <Input 
                            id="campus"
                            type="text"
                            label="Campus"
                            placeholder="Nome do Campus"
                        />
                    </div>
                    <div style={{width: "15%"}}>
                        <Input 
                            id="cod_campus"
                            type="text"
                            label="Código"
                            placeholder="000"
                        />
                    </div>
                    <div style={{width: "45%"}}>
                        <Input 
                            id="curso"
                            type="text"
                            label="Curso"
                            placeholder="Nome do Curso"
                        />
                    </div>
                    <div style={{width: "20%"}}>
                        <Select id="modalidade" label="Modalidade">
                            <option value="pres">Presencial</option>
                            <option value="semi-pres">Semi-presencial</option>
                            <option value="ead">Distancia</option>
                        </Select>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "20%"}}>
                        <Input 
                            id="dia_matricula"
                            type="date"
                            label="Dia da Matrícula"
                        />
                    </div>
                    <div style={{width: "15%"}}>
                        <Input 
                            id="periodo"
                            type="text"
                            label="Período"
                            placeholder="0000-0"
                        />
                    </div>
                    <div style={{width: "50%"}}>
                        <Input 
                            id="matricula"
                            type="text"
                            label="Matrícula"
                            placeholder="000000000000"
                        />
                    </div>
                    <div style={{width: "15%"}}>
                        <Input 
                            id="pasta"
                            type="text"
                            label="Pasta"
                            placeholder="00000"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}