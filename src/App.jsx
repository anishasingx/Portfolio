import About from "./components/About"
import Home from "./components/Home"
import Internship from "./components/Internship"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Training from "./components/Training"
import Experience from "./components/Experience"
import Interest from "./components/Interest"
import Portfolio from "./components/Portfolio"
import Testimonal from "./components/Testimonal"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import toast, { Toaster } from 'react-hot-toast';



const App = () => {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Training></Training>
        <Internship></Internship>
        <Project></Project>
        <Experience></Experience>
        <Interest></Interest>
        <Portfolio></Portfolio>
        <Testimonal></Testimonal>
        <Contact></Contact>
        <Footer></Footer>
     </div>
     <Toaster />
    </>
  )
}

export default App
