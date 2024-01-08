import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen font-bold uppercase" >
        <header className=" flex items-center justify-center h-20 bg-base-content">
          Header
        </header>
        <div className="flex flex-1 ">
        {children}
        </div>
        <header className=" flex items-center justify-center h-20  bg-base-content">
          Footer
        </header>
      </body>
    </html>
  );
}
