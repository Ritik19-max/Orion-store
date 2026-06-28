import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase"; 

export function AddProduct() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");
  const [badge, setBadge] = useState("");
  const [rating, setRating] = useState("★★★★★");

  // 1. Session check karne ke liye useEffect (Mentor logic)
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });
  }, []);

  // Sign out function
  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/products");
  }

  async function submitProduct(e) {
    e.preventDefault(); 

    if (!name || !prize) {
      alert("Name and Prize is mandatory!");
      return;
    }

    const { error } = await supabase.from("Product").insert({
      Name: name,
      Prize: prize,
      Badge: badge,
      Rating: rating
    });

    if (error) {
      console.error("Error inserting data:", error);
      alert("There is some issue , check console!");
    } else {
      alert("Congratulatioon your product is added in database.");
      
      setName("");
      setPrize("");
      setBadge("");
    }
  }

  return (
    <div style={{ backgroundColor: '#0a0b10', color: '#ffffff', minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '30px', width: '100%', maxWidth: '400px' }}>
        
        {/* 2. Top Header section with user email and Sign out button */}
        {user && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.03)', padding: '10px 15px', borderRadius: '10px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: '#a6adbb', fontSize: '13px' }}>{user?.email}</span>
            <button onClick={handleSignOut} style={{ background: 'transparent', border: '1px solid #ff4a4a', color: '#ff4a4a', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>
              Sign out
            </button>
          </div>
        )}

        <h2 style={{ color: '#00f2fe', textAlign: 'center', marginBottom: '20px' }}>Add New Product</h2>
        
        <form onSubmit={submitProduct}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#a6adbb' }}>Product Name</label>
            <input type="text" placeholder="e.g., Orion Headphones" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#a6adbb' }}>Price</label>
            <input type="text" placeholder="e.g., $99.00" value={prize} onChange={(e) => setPrize(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#a6adbb' }}>Badge</label>
            <input type="text" placeholder="e.g., New Arrival" value={badge} onChange={(e) => setBadge(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#a6adbb' }}>Rating</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}>
              <option value="★★★★★">★★★★★ (5 Stars)</option>
              <option value="★★★★☆">★★★★☆ (4 Stars)</option>
              <option value="★★★☆☆">★★★☆☆ (3 Stars)</option>
            </select>
          </div>

          <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', color: '#0a0b10', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}