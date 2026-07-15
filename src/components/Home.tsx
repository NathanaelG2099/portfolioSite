import selfie from "../assets/selfie.jpeg";
import React, {useState, useEffect} from "react";


const Home = () => {
  const [windowDimensions, setWindowDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const halfWidth = Math.max(windowDimensions.width - 100, 200)/ 2;

  return (
    <>
    
    <main className="h-[calc(100vh-2.5rem)] bg-slate-950 text-white px-6 pt-4 pb-4 md:px-12 flex justify-center">
      <div className="flex flex-col sm:flex-row h-[calc(100vh-3.5rem)] items-stretch justify-center gap-8 md:gap-12 w-full max-w-6xl">
        
        {/* Left Box: Image Container */}
        <div style={{ minWidth: `${halfWidth}px` }} className="rounded-2xl outline outline-1 outline-slate-800 contain-size">
          <div className="w-full h-full rounded-2xl overflow-hidden"> 
            <img 
              src={selfie} 
              alt="Nathanael Garcia profile portrait" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Box: Text Container */}
        <div style={{ minWidth: `${halfWidth}px` }} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col justify-center gap-4">
          <h1 className="text-9xl font-bold tracking-tight bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Hi, I'm Nathanael Garcia
          </h1>
          <p className="text-base md:text-2xl text-slate-400 leading-relaxed">
            A computer programmer based in Porterville, CA. Feel free to look around!
          </p>
        </div>

      </div>
    </main>
    </>
  )
}

export default Home