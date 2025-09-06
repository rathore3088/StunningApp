import Header from "./components/Header"
import Hero from "./components/HEro"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function App(){
  useEffect(()=> {
    AOS.init({
      duration:1500,
      once: true,
    })
  })
  return(
    <main>
      {}
      <img className = "absolute top-0 right-0 opacity-60 -z-1"src="/gradient.png" alt="Gradient-img" />
    <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] 
    shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]-z-10" ></div>
    <Header/>
    <Hero/>
    </main>

    // {blur effect }

  )
}
