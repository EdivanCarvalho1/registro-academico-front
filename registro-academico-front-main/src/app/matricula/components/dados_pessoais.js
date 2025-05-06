"use client"
import Input from './input/input';
import Select from './input/select';

export default function DadosPessoais(){
    return(
        <div className="pl-5">
            <h2 className="fs-5">1. Dados Pessoais</h2>

            <div className='d-flex p-3 mb-4' style={{width: '100%'}}>

                <div className='h-100 w-50'>

                    <Input 
                        id="nomeAluno"
                        type="text"
                        label="Nome do Aluno"
                        placeholder="Nome e Sobrenome"
                    />

                    <div className='d-flex' style={{width: '100%'}}>

                        <div style={{width: '50%'}}>
                            <Select className="w-100" id="nacionalidade" label="Nacionalidade">
                                <option value="BR">Brasil</option>
                                <option value="PT">Portugal</option>
                                <option value="AN">Angola</option>
                                <option value="MO">Moçambique</option>
                                <option value="AR">Argentina</option>
                                <option value="UR">Uruguai</option>
                                <option value="PG">Paraguai</option>
                                <option value="CH">Chile</option>
                            </Select>
                        </div>

                        <div style={{width: '50%'}}>
                            <Input 
                                id="nascimentoAluno"
                                type="date"
                                label="Data de Nascimento"
                            />
                        </div>

                    </div>

                    <Input 
                        id="nomePai"
                        type="text"
                        label="Nome do Pai"
                        placeholder="Nome e Sobrenome"
                    />

                    <Select 
                        id="escolaridadePai"
                        type="text"
                        label="Escolaridade"
                    >
                        <option value="fundamental">Fundamental</option>
                        <option value="medio">Médio</option>
                        <option value="superior_incompleto">Superior Incompleto</option>
                        <option value="superior_completo">Superior Completo</option>
                        <option value="pos_incompleta">Pós Graduaçao Incompleta</option>
                        <option value="pos_completa">Pós Graduaçao Completa</option>
                    </Select>

                    <Input 
                        id="nomeMae"
                        type="text"
                        label="Nome da Mae"
                        placeholder="Nome e Sobrenome"
                    />

                    <Select 
                        id="escolaridadeMae"
                        type="text"
                        label="Escolaridade"
                    >
                        <option value="fundamental">Fundamental</option>
                        <option value="medio">Médio</option>
                        <option value="superior_incompleto">Superior Incompleto</option>
                        <option value="superior_completo">Superior Completo</option>
                        <option value="pos_incompleta">Pós Graduaçao Incompleta</option>
                        <option value="pos_completa">Pós Graduaçao Completa</option>
                    </Select>

                </div>

                <div className='h-100 w-25'>

                    <Input 
                        id="telefoneAluno"
                        type="tel"
                        label="Telefone"
                        placeholder="+00 (00) 00000-0000"
                    />

                    <Select id="sexo" label="Sexo">
                        <option value="masc">Masculino</option>
                        <option value="fem">Feminino</option>
                    </Select>

                    <Input 
                        id="telefonePai"
                        type="tel"
                        label="Telefone"
                        placeholder="+00 (00) 00000-0000"
                    />

                    <Select id="estadoCivilPai" label="Estado Civil">
                        <option value="solteiro">Solteiro</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                        <option value="viúvo">Viúvo</option>
                    </Select>

                    <Input 
                        id="telefoneMae"
                        type="tel"
                        label="Telefone"
                        placeholder="+00 (00) 00000-0000"
                    />

                    <Select id="estadoCivilMae" label="Estado Civil">
                        <option value="solteira">Solteira</option>
                        <option value="casada">Casada</option>
                        <option value="divorciada">Divorciada</option>
                        <option value="viúva">Viúva</option>
                    </Select>

                </div>

                <div className='h-100 w-25'>

                    <Input 
                        id="emailAluno"
                        type="mail"
                        label="E-mail"
                        placeholder="email@dominio.com"
                    />

                    <Select id="cor" label="Cor / Etnia">
                        <option value="branco">Branco</option>
                        <option value="negro">Negro</option>
                        <option value="pardo">Pardo</option>
                        <option value="indigena">Indígena</option>
                        <option value="asiatico">Asiático</option>
                        <option value="outro">Outro</option>
                    </Select>

                    <Input 
                        id="emailPai"
                        type="mail"
                        label="E-mail"
                        placeholder="email@dominio.com"
                    />

                    <Input 
                        id="nascimentoPai"
                        type="date"
                        label="Data de Nascimento"
                    />

                    <Input 
                        id="emailPai"
                        type="mail"
                        label="E-mail"
                        placeholder="email@dominio.com"
                    />

                    <Input 
                        id="nascimentoMae"
                        type="date"
                        label="Data de Nascimento"
                    />

                </div>

                
            </div>

        </div>
    )
}