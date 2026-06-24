import React, { useState } from "react";
import { supabase } from "./supabase"; 

export function AddProduct() {
  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");
  const [badge, setBadge] = useState("");
  const [rating, setRating] = useState("★★★★★");

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