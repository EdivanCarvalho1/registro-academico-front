import "./globals.css";

export const metadata = {
  title: "Registro Acadêmico",
  description: "Sistema de Registro Acadêmico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
