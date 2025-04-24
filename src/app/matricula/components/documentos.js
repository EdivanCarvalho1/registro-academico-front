"use client"
import Input from './input/input';
import SelectUfBr from './input/select_ufbr';

export default function Documentos(){
    return(
        <div className="pl-5">
            <h2 className="fs-5">2. Documentos</h2>

            <div className='d-flex p-3 mb-4' style={{width: '100%'}}>

                <div className='h-100 w-50 d-flex'>
                    <div style={{height: "100px", width: '100%'}}>
                        <Input 
                            id="rg"
                            type="text"
                            label="RG"
                            placeholder="00.000000-00"
                        />
                        <Input 
                            id="cert_nasc"
                            type="text"
                            label="Certidao de Nascimento"
                            placeholder="000.000.000-00"
                        />
                        <Input 
                            id="titulo_eleitor"
                            type="text"
                            label="Título de Eleitor"
                            placeholder="000.000.000-00"
                        />
                    </div>
                    <div className='w-50'>
                        <Input 
                            id="org_exp"
                            type="text"
                            label="Órgao Expeditor"
                            placeholder="Insira o nome"
                        />
                        <div className='w-100'>
                            <div className='d-flex'>
                                <div style={{width: "66%"}}>
                                    <Input 
                                        id="emissao"
                                        type="date"
                                        label="Emissao"
                                        style={{width: "100%"}}
                                    />
                                </div>
                                <div style={{width: "33%"}}>
                                    <Input
                                        id="folha"
                                        type="text"
                                        label="Folha"
                                        placeholder="000"
                                        style={{width: "100%"}}
                                    />
                                </div>
                            </div>
                            <div className='d-flex'>
                            <div style={{width: "66%"}}>
                                    <Input 
                                        id="emissao"
                                        type="date"
                                        label="Emissao"
                                        style={{width: "100%"}}
                                    />
                                </div>
                                <div style={{width: "33%"}}>
                                    <SelectUfBr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-100 w-50 d-flex flex-column'>
                    <div className='d-flex' style={{width: '100%'}}>
                        <div style={{width: "55%"}}>
                            <Input 
                                id="cpf"
                                type="text"
                                label="CPF"
                                placeholder="000.000.000-00"
                            />
                        </div>
                        <div style={{width: "30%"}}>
                            <Input 
                                id="exp_cpf"
                                type="date"
                                label="Expediçao"
                            />
                        </div>
                        <div style={{width: "15%"}}>
                            <SelectUfBr />
                        </div>
                    </div>

                    <div className='d-flex' style={{width: '100%'}}>
                        <div style={{width: "70%"}}>
                            <Input 
                                id="nome_cartorio"
                                type="text"
                                label="Nome do Cartório"
                                placeholder="Insira o nome"
                            />
                        </div>
                        <div style={{width: "30%"}}>
                            <Input 
                                id="livro_cartorio"
                                type="text"
                                label="Livro"
                                placeholder="000"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}