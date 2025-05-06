"use client"
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function Endereco(){
    return(
        <div className="pl-5">

            <h2 className="fs-5">3. Endereço Residencial</h2>

            <div className='d-flex p-3 flex-column mb-4' style={{width: '100%'}}>
                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "22.5%"}}>
                        <Input 
                            id="cep"
                            type="text"
                            label="CEP"
                            placeholder="00000-000"
                        />
                    </div>
                    <div style={{width: "42.5%"}}>
                        <Input 
                            id="cidade"
                            type="text"
                            label="Cidade"
                            placeholder="Insira o nome"
                        />
                    </div>
                    <div style={{width: "22.5%"}}>
                        <SelectUfBr default_value="Selecione" label="Estado" />
                    </div>
                    <div style={{width: "12.5%"}}>
                        <Input 
                            id="numero"
                            type="text"
                            label="Numero"
                            placeholder="Número"
                        />
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: "37.5%"}}>
                        <Input 
                            id="rua"
                            type="text"
                            label="Rua"
                            placeholder="Nome da rua"
                        />
                    </div>
                    <div style={{width: "37.5%"}}>
                        <Input 
                            id="bairro"
                            type="text"
                            label="Bairro"
                            placeholder="Nome do bairro"
                        />
                    </div>
                    <div style={{width: "25%"}}>
                        <Input 
                            id="complemento"
                            type="text"
                            label="Complemento"
                            placeholder="Digite"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}