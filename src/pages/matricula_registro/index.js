import Input from "./components/TextInput";
import SelectInput from "./components/SelectInpurt";
import Table from "./components/Table";
import { lista_cursos, lista_usuarios } from "./data";
import React from "react";

import "./style.css";

export default function MatriculaRegistro() {
  const [campusValue, setCampusValue] = React.useState("");
  const [codigoInputValue, setCodigoInputValue] = React.useState("");
  const [cursoValue, setCursoValue] = React.useState("");

  return (
    <div className="matricula-registro-container">
      <h1>MATRICULA DE NOVO ALUNO</h1>

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

      <Table usuarios={lista_usuarios} />
    </div>
  );
}
