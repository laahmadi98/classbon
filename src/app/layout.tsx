import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen font-bold uppercase" >
        <header className="bg-gray-200 flex items-center justify-center h-20">
          Header
        </header>
        <div className="flex flex-1 ">
        {children}
        </div>
        <header className="bg-gray-200 flex items-center justify-center h-20 ">
          Footer
        </header>
      </body>
    </html>
  );
}
