import selfie from "../assets/selfie.jpeg";
const Home = () => {
  return (
    <>
    
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Box: Image Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden min-h-75 md:min-h-112.5 flex items-center justify-center">
          <img 
            src={selfie} 
            alt="Nathanael Garcia profile portrait" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Box: Text Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Hi, I'm Nathanael Garcia
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            A computer programmer based in Porterville, CA. Feel free to look around!
          </p>
        </div>

      </div>
    </main>
    </>
  )
}

export default Home