import "./globals.css";


export const metadata = {
  title: "Registro Acadêmico",
  description: "Registro Acadêmico Institucional",
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
