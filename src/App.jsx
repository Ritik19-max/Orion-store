import {Navbar} from './Components/Navbar.jsx'
import {Home} from './Components/Home.jsx'
import {About} from './Components/About.jsx'
import {Contact} from './Components/Contact.jsx'
import {Footer} from './Components/Footer.jsx'
import {Products} from './Product.jsx'
import {AddProduct} from './AddProduct.jsx'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App