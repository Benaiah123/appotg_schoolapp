import Sidebar from "../components/Sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    
       
        <section className="flex flex-col md:flex-row min-h-screen w-screen">
               <Sidebar />
              <main className="bg-[#F5F6FA] grow px-9">
                {children}
              </main>
            </section>
      
  );
}
