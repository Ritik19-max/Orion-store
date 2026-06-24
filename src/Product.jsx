import React, { useEffect, useState } from 'react';
import { supabase } from "./supabase";

export function Products() {
  const [productData, setProductData] = useState([]);

  async function fetchProducts() {
    const { data } = await supabase.from("Product").select("*");
    if (data) {
      setProductData(data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const styles = {
    section: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#0a0b10', 
      color: '#ffffff',
      padding: '80px 6%',
    },
    animationSheet: (
      <style>{`
        .interactive-product-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .interactive-product-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 242, 254, 0.25) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 254, 0.05) !important;
        }
        .zoom-product-img {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease !important;
        }
        .interactive-product-card:hover .zoom-product-img {
          transform: scale(1.06);
          filter: drop-shadow(0px 15px 25px rgba(0, 242, 254, 0.2)) !important;
        }
        .animated-card-badge {
          transition: transform 0.3s ease, background-color 0.3s ease !important;
        }
        .interactive-product-card:hover .animated-card-badge {
          transform: scale(1.05) translateX(3px);
          background-color: rgba(0, 242, 254, 0.2) !important;
        }
        .cart-action-btn {
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease !important;
        }
        .cart-action-btn:hover {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%) !important;
          color: #0a0b10 !important;
          border-color: transparent !important;
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 242, 254, 0.3) !important;
        }
      `}</style>
    ),
    sectionHeader: {
      marginBottom: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '20px',
    },
    titleContainer: {
      maxWidth: '500px',
    },
    tag: {
      color: '#00f2fe',
      fontSize: '13px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
      display: 'block',
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '800',
      margin: 0,
      letterSpacing: '-0.5px',
    },
    sectionSubtitle: {
      color: '#a6adbb',
      fontSize: '16px',
      marginTop: '10px',
      lineHeight: '1.5',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '35px',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '24px',
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden',
    },
    cardBadge: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      background: 'rgba(0, 242, 254, 0.12)',
      border: '1px solid rgba(0, 242, 254, 0.25)',
      color: '#00f2fe',
      fontSize: '11px',
      fontWeight: '700',
      padding: '5px 12px',
      borderRadius: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      zIndex: 2,
    },
    cardImageContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.01)',
      border: '1px solid rgba(255, 255, 255, 0.02)',
      borderRadius: '18px',
      padding: '20px',
      marginBottom: '20px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    cardImage: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
      filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))',
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: 0,
      color: '#ffffff',
      lineHeight: '1.4',
      height: '50px',
      overflow: 'hidden',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '5px',
      marginBottom: '15px',
    },
    cardPrice: {
      fontSize: '22px',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #ffffff 60%, #a6adbb 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    rating: {
      color: '#00f2fe',
      fontSize: '14px',
      letterSpacing: '1px',
    },
    btnSecondary: {
      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '12px 20px',
      borderRadius: '16px',
      fontWeight: '600',
      fontSize: '15px',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    cartIcon: {
      width: '16px',
      height: '16px',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
    }
  };

  return (
    <section id="products" style={styles.section}>
      {styles.animationSheet}

      <div style={styles.sectionHeader}>
        <div style={styles.titleContainer}>
          <span style={styles.tag}>Premium Selection</span>
          <h2 style={styles.sectionTitle}>Our Flagship Products</h2>
          <p style={styles.sectionSubtitle}>
            Explore elite futuristic designs engineered for high-performance and absolute aesthetic pleasure.
          </p>
        </div>
      </div>

      <div style={styles.productGrid}>
        {productData.map((product) => (
          <div key={product.id} className="interactive-product-card" style={styles.card}>
            
            <span className="animated-card-badge" style={styles.cardBadge}>{product.Badge}</span>
            
            

            <div style={styles.infoContainer}>
              <h3 style={styles.cardTitle}>{product.Name}</h3>
              
              <div style={styles.priceContainer}>
                <span style={styles.cardPrice}>{product.Prize}</span>
                <span style={styles.rating}>{product.Rating}</span>
              </div>

              <button className="cart-action-btn" style={styles.btnSecondary}>
                <svg style={styles.cartIcon} viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}