import React, { useState } from 'react';
import './App.css';
import backgroundVideo from "./assets/videos/background.mp4";
import logoImage from "./assets/images/logo.png";

function App() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div onClick={() => { setIsMuted(false); document.getElementsByTagName("video")[0].volume = 0.05; }}>
      <video autoPlay loop playsInline muted={isMuted} className='absolute inset-0 w-full h-full object-cover' src={backgroundVideo}>
        <p>Your browser cannot play the provided video file.</p>
      </video>
      <main className="grid min-h-screen grid-rows-[1fr,max-content] place-items-center p-8 relative bg-black/25">
        <div className="flex flex-col items-center space-y-6">
          <img className="animation-shaking h-12 text-white sm:h-32 m:h-36 lg:h-40 2xl:h-44 user-select-none" src={logoImage} alt='Morsunist Project' />
          <p className="animation-shaking text-center font-light text-white user-select-none">For more informations, join to our Discord</p>
          <button 
            className="animation-shaking bg-primary rounded-md disabled:cursor-not-allowed inline-flex items-center justify-center px-4 py-2 font-medium text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => window.location.href = "https://discord.gg/CbNh4nT"}
            >
              *click here 🐧*
          </button>
        </div>
        <footer className="text-stone-400">
          <div className="hidden items-center space-x-6 justify-self-end lg:flex">
            <a className="transition-colors duration-200 ease-in hover:text-white" target="_blank" rel="noopener noreferrer" href=".">(this is a simlife discord bot, if u didnt know)</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
