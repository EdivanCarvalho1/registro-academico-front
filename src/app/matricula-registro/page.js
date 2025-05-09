'use client'
import Input from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import Table from "./components/Table";
import { lista_cursos, lista_usuarios } from "./data";
import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import "./style.css";
import Header from "../matricula/components/header/header";

export default function MatriculaRegistro() {
  const [campusValue, setCampusValue] = React.useState("");
  const [codigoInputValue, setCodigoInputValue] = React.useState("");
  const [cursoValue, setCursoValue] = React.useState("");

  return (
      <div>
        <Header/>
            <div className="matricula-registro-container">
        <div className="flex items-center gap-2 mb-4">
          <a href="/consulta-relatorio">
            <CiCircleChevLeft className="h-9 w-9 pb-2" />
          </a>
          <h1 className="font-bold pb-2 text-2xl">
            MATRICULA DE NOVO ALUNO
            </h1>
        </div>
        <div className="inputs">
          <SelectInput
            options={[
              { value: "centro", label: "Centro" },
              { value: "guarus", label: "Guarus" },
            ]}
            width="350px"
            value={campusValue}
            onChange={(e) => setCampusValue(e.target.value)}
            defaultValue="Campus"
          />
          <Input
            width="100px"
            placeholder="Código"
            margin="0 0 0 30px"
            value={codigoInputValue}
            onChange={(e) => setCodigoInputValue(e.target.value)}
          />
          <SelectInput
            options={lista_cursos}
            width="350px"
            value={cursoValue}
            onChange={(e) => setCursoValue(e.target.value)}
            margin="0 0 0 5px"
            defaultValue={"Cursos"}
          />
        </div>
        
        <a href="/matricula">
          <Table usuarios={lista_usuarios}
          />
        </a>
            </div>
      </div>
  );
}
