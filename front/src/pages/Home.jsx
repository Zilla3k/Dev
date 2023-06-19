import Navbar from '../layout/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed  w-full h-[40rem]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">Build your new <span className="text-blue-400">Saas</span> Project</h1>
        </div>
      </div>
    </>
  )
}

export default App
