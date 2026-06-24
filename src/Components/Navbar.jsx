import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 6%',
      backgroundColor: 'rgba(10, 11, 16, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
    },
    logoIcon: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      display: 'inline-block',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: '800',
      letterSpacing: '1px',
      background: 'linear-gradient(135deg, #ffffff 40%, #a6adbb 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '30px',
      margin: 0,
      padding: 0,
      alignItems: 'center',
    },
    navLink: {
      color: '#a6adbb',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '8px 15px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      width: '250px',
    },
    searchInput: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      outline: 'none',
      marginLeft: '8px',
      fontSize: '14px',
      width: '100%',
    },
    btnAddProduct: {
      background: 'rgba(0, 242, 254, 0.1)',
      color: '#00f2fe',
      border: '1px solid #00f2fe',
      padding: '8px 16px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '600',
      textDecoration: 'none',
      cursor: 'pointer',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <div><img src="https://png.pngtree.com/template/20210302/ourmid/pngtree-electronic-shopping-cart-vector-logo-design-idea-image_493511.png" width="30px" height="30px" /></div>
        <span style={styles.logoText}>ORION STORE</span>
      </div>

      <ul style={styles.navLinks}>
        <li><Link to="/home" style={styles.navLink}>Home</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
        <li><Link to="/products" style={styles.navLink}>Products</Link></li>
        <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
      </ul>

      <div style={styles.rightSection}>
        <div style={styles.searchContainer}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a6adbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search gadgets..." style={styles.searchInput} />
        </div>

        <Link to="/addproduct" style={styles.btnAddProduct}>
          + Add Product
        </Link>
      </div>
    </nav>
  );
}