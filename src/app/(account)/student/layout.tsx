
async function StudentLayout(
  {
    children
  }:
  {
    children : React.ReactNode;
  }
) {
    return(
        <>
        <aside className="w-80 bg-gray-400 flex justify-center items-center self-stretch text-3xl">SideBar</aside>
        <main className="flex justify-center items-center flex-1 text-5xl">
            {children}
        </main>
        </>

        
    )
}

export default StudentLayout