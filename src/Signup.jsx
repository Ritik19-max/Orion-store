import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from './supabase.js'

export function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function submit(e) {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      setMessage("Registration successful! Please check your email for confirmation.")
      setError("")
    } catch (e) {
      setError(e.message)
      setMessage("")
    }
  }

  return (
    <div style={{ backgroundColor: '#0a0b10', color: '#ffffff', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '350px' }}>
        <h2 style={{ color: '#00f2fe', textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        
        <form onSubmit={submit}>
          <div style={{ marginBottom: '15px' }}>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} required />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} required />
          </div>

          {error && <p style={{ color: '#ff4a4a', fontSize: '14px', marginBottom: '15px', textAlign: 'center' }}>{error}</p>}
          {message && <p style={{ color: '#00f2fe', fontSize: '14px', marginBottom: '15px', textAlign: 'center' }}>{message}</p>}
          
          <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', color: '#0a0b10', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>Sign up</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', color: '#a6adbb', fontSize: '14px' }}>Already have an account? <Link to="/login" style={{ color: '#00f2fe', textDecoration: 'none' }}>Sign in</Link></p>
      </div>
    </div>
  )
}