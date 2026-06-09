import {Navbar} from './Components/Navbar.jsx'
import {Home} from './Components/Home.jsx'
import {About} from './Components/About.jsx'
import {Contact} from './Components/Contact.jsx'
import {Footer} from './Components/Footer.jsx'
import {Products} from './Components/Product.jsx'
import {Routes,Route} from 'react-router-dom'


function App() {
  function submit(){
    console.log("submit function")
  }
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App

