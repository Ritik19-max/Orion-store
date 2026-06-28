import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from './supabase.js'

export function Login({ onLoginSuccess }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      if (data?.session) {
        onLoginSuccess(data.session.user)
        navigate('/addproduct')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div style={{ backgroundColor: '#0a0b10', color: '#ffffff', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '350px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ color: '#00f2fe', textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: '800' }}>Sign In</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
        </div>

        {error && <p style={{ color: '#ff4a4a', fontSize: '14px', marginBottom: '15px', textAlign: 'center' }}>{error}</p>}
        
        <button className="cart-action-btn" onClick={submit} style={{ width: '100%', background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', color: '#0a0b10', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>Sign in</button>
      </div>
    </div>
  )
}