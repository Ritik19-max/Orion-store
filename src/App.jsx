import { useState, useEffect } from 'react'
import { Navbar } from './Components/Navbar.jsx'
import { Home } from './Components/Home.jsx'
import { About } from './Components/About.jsx'
import { Contact } from './Components/Contact.jsx'
import { Footer } from './Components/Footer.jsx'
import { Products } from './Product.jsx'
import { AddProduct } from './AddProduct.jsx'
import { Login } from './Loign.jsx'
import { SignUp } from './Signup.jsx'
import { Routes, Route } from 'react-router-dom'
import { supabase } from './supabase.js'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      {/* 1. Navbar ko user state pass kar rahe hain taaki login/logout button dynamic chalein */}
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/login' element={<Login onLoginSuccess={setUser} />} />
        <Route path='/signup' element={<SignUp />} />
        
        <Route 
          path='/addproduct' 
          element={
            loading ? (
              <div style={{ backgroundColor: '#0a0b10', color: '#fff', minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3>Loading...</h3>
              </div>
            ) : user ? (
              <AddProduct />
            ) : (
              <Login onLoginSuccess={setUser} />
            )
          } 
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
