export default function Table({ usuarios }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome do ingressante</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((user, index) => (
          <tr key={index}>
            <td className={user.status == "Analisar" ? "primary-color" : user.status.toLowerCase()}>
              {user.cpf}
            </td>
            <td className={user.status == "Analisar" ? "primary-color" : user.status.toLowerCase()}>
              {user.name}
            </td>
            <td className={user.status.toLowerCase()}>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
