"use client"
import FileInput from './input/file_input';

export default function DocumentosEnviados(){
    return(
        <div className="pl-5">
            <h2 className="fs-5">7. Documentos Enviados</h2>

            <div className='d-flex p-3 mb-4 flex-column' style={{width: '100%'}}>

                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: '25%'}}>
                        <FileInput label="RG / CNH" />
                    </div>
                    <div style={{width: '25%'}}>
                        <FileInput label="Certidao de Nascimento" />
                    </div>
                    <div style={{width: '25%'}}>
                        <FileInput label="Documento 3" />
                    </div>
                    <div style={{width: '25%'}}>
                        <FileInput label="Documento 4" />
                    </div>
                </div>

                <div className='d-flex' style={{width: '100%'}}>
                    <div style={{width: '25%'}}>
                        <FileInput label="Histórico Escolar" />
                    </div>
                    <div style={{width: '25%'}}>
                        <FileInput label="Documento 6" />
                    </div>
                </div>
            
            </div>

        </div>
    )
}