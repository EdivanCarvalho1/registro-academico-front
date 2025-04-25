import "./globals.css";
import BootstrapClient from "./matricula/components/bootstrap/BootstrapClient";

export const metadata = {
  title: "Registro Acadêmico",
  description: "Sistema de Registro Acadêmico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
