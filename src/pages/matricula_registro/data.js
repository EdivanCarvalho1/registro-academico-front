let lista_usuarios = [
  {
    cpf: "000.000.000-00",
    name: "Aluno 1 da Silva Ferreira",
    status: "Matriculado",
  },
  {
    cpf: "111.111.111-11",
    name: "Aluno 2 da Silva Ferreira",
    status: "Pendente",
  },
  {
    cpf: "222.222.222-22",
    name: "Aluno 3 da Silva Ferreira",
    status: "Analisar",
  },
];

for (let i = 0; i < 17; i++) {
  lista_usuarios.push({
    cpf: "222.222.222-22",
    name: `Aluno ${i + 4} da Silva Ferreira`,
    status: "Analisar",
  });
}

let lista_cursos = [
  { value: "sistemas_informacao", label: "Sistemas de Informação" },
  { value: "engenharia_computacao", label: "Engenharia da Computação" },
  { value: "engenharia_software", label: "Engenharia de Software" },
  { value: "redes_computadores", label: "Redes de Computadores" },
  { value: "gestao_tecnologia", label: "Gestão da Tecnologia da Informação" },
  { value: "gestao_negocios", label: "Gestão de Negócios" },
  { value: "gestao_projetos", label: "Gestão de Projetos" },
  { value: "gestao_qualidade", label: "Gestão da Qualidade" },
  { value: "gestao_rh", label: "Gestão de Recursos Humanos" },
  { value: "gestao_marketing", label: "Gestão de Marketing" },
  { value: "gestao_financeira", label: "Gestão Financeira" },
  { value: "gestao_logistica", label: "Gestão Logística" },
  { value: "gestao_vendas", label: "Gestão de Vendas" },
  { value: "gestao_compras", label: "Gestão de Compras" },
  { value: "gestao_estoque", label: "Gestão de Estoque" },
  { value: "gestao_producao", label: "Gestão da Produção" },
];

export { lista_usuarios, lista_cursos };
