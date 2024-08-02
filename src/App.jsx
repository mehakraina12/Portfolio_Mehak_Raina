import Mehak from "./components/Mehak"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased section:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black">
        </div>
      </div>
    <div className="container mx-auto px-8">
      <Navbar/>
      <Mehak/>
      <About/>
      <Projects/>
      
      
      {/* <Experience/> */}
      
      <Contacts/>
      </div>
    </div>
  )
}

export default App
