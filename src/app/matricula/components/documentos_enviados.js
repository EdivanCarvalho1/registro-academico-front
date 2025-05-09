"use client";
import FileInput from './input/file_input';

export default function DocumentosEnviados() {
  return (
    <div className="pl-5">
      <h2 className="text-base font-semibold">7. Documentos Enviados</h2>

      <div className="flex flex-col p-3 mb-4 w-full gap-4">

        <div className="flex w-full gap-4">
          <div className="w-1/4">
            <FileInput label="RG / CNH" />
          </div>
          <div className="w-1/4">
            <FileInput label="Certidão de Nascimento" />
          </div>
          <div className="w-1/4">
            <FileInput label="Documento 3" />
          </div>
          <div className="w-1/4">
            <FileInput label="Documento 4" />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-1/4">
            <FileInput label="Histórico Escolar" />
          </div>
          <div className="w-1/4">
            <FileInput label="Documento 6" />
          </div>
        </div>

      </div>
    </div>
  );
}
