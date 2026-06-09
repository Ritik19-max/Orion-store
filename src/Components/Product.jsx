export function Products() {
  const styles = {
    section: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#0a0b10', 
      color: '#ffffff',
      padding: '80px 6%',
    },
    // --- HOVER ANIMATION SHEET INJECTION ---
    animationSheet: (
      <style>{`
        /* Card Structure Interactive Glow */
        .interactive-product-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .interactive-product-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 242, 254, 0.25) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 254, 0.05) !important;
        }

        /* Product Image Motion Zoom */
        .zoom-product-img {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease !important;
        }
        .interactive-product-card:hover .zoom-product-img {
          transform: scale(1.06);
          filter: drop-shadow(0px 15px 25px rgba(0, 242, 254, 0.2)) !important;
        }

        /* Top Badge Animation Toggle */
        .animated-card-badge {
          transition: transform 0.3s ease, background-color 0.3s ease !important;
        }
        .interactive-product-card:hover .animated-card-badge {
          transform: scale(1.05) translateX(3px);
          background-color: rgba(0, 242, 254, 0.2) !important;
        }

        /* Action Cart Button Fill Inversion */
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

  const productData = [
    { id: 1, name: "Orion SoundPulse Wireless Headphones", price: "$249.00", badge: "Best Seller", rating: "★★★★★", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Orion Chrono Smartwatch Series 5", price: "$199.00", badge: "New Arrival", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Orion Nebula Mechanical Keyboard", price: "$129.00", badge: "Trending", rating: "★★★★★", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 4, name: "Orion StreamCam 4K Ultra HD", price: "$159.00", badge: "Premium", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1600856209923-34372e319a5d?w=500&q=80" },
    
    { id: 5, name: "Orion Pro ANC Earbuds", price: "$149.00", badge: "Popular", rating: "★★★★★", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" },
    { id: 6, name: "Orion Quantum Gaming Mouse", price: "$89.00", badge: "Gamers Choice", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 7, name: "Orion Horizon Curved Monitor 32\"", price: "$449.00", badge: "Top Rated", rating: "★★★★★", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleDUi8KjmWSlRE85WWfU0pb-M2c-hyniK8Q&s" },
    { id: 8, name: "Orion SoundBar Cinema X", price: "$299.00", badge: "Limited", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80" },
    
    { id: 9, name: "Orion MagSafe Power Hub", price: "$69.00", badge: "Essential", rating: "★★★★☆", img: "https://www.virginmegastore.ae/medias/674356-main.jpg?context=bWFzdGVyfHJvb3R8NjEwMTV8aW1hZ2UvanBlZ3xhRGd4TDJneE15OHhNRE0xTlRVMU9EY3hNVE15Tmk4Mk56UXpOVFpmWDIxaGFXNHVhbkJufDE4Y2VkYmE2OTE3ZDZjYTcxZGY1MDE1YTViZTk1ODU0MTdmNWVmOGQ5NTFjNGI4Njg3ODIwM2M1MzM2NjY1YWQ" },
    { id: 10, name: "Orion Drone Phantom View", price: "$799.00", badge: "Pro Gear", rating: "★★★★★", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&q=80" },
    { id: 11, name: "Orion VR Apex Headset", price: "$399.00", badge: "Hot Drop", rating: "★★★★★", img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&q=80" },
    { id: 12, name: "Orion PureStream Mic Pro", price: "$119.00", badge: "Studio Choice", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80" },
    
    { id: 13, name: "Orion ChargePad Duo 15W", price: "$49.00", badge: "Fast Charge", rating: "★★★★☆", img: "https://www.xtorm.eu/cdn/shop/files/Lifestyle_20Image_XW_1.webp?v=1767794392" },
    { id: 14, name: "Orion Titan Rugged Powerbank", price: "$79.00", badge: "Heavy Duty", rating: "★★★★★", img: "https://cdn.shopify.com/s/files/1/0272/6084/6180/files/promate-titan-130-11_large.png?v=1743596751" },
    { id: 15, name: "Orion Nova RGB Desk Mat", price: "$35.00", badge: "Sleek Setup", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&q=80" },
    { id: 16, name: "Orion Pulse Smart Fitness Band", price: "$59.00", badge: "Health Tech", rating: "★★★★★", img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80" },
    
    { id: 17, name: "Orion Beam 1080p Mini Projector", price: "$189.00", badge: "Home Cinema", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&q=80" },
    { id: 18, name: "Orion Helix Ergonomic Stand", price: "$45.00", badge: "Workstation", rating: "★★★★★", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
    { id: 19, name: "Orion PureAir Desk Purifier", price: "$99.00", badge: "Eco Tech", rating: "★★★★☆", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80" },
    { id: 20, name: "Orion SoundPod Mini Speaker", price: "$39.00", badge: "Super Bass", rating: "★★★★★", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80" }
  ];

  return (
    <section id="products" style={styles.section}>
      {/* Inject Interactive Animations Rules */}
      {styles.animationSheet}

      {/* Header Container */}
      <div style={styles.sectionHeader}>
        <div style={styles.titleContainer}>
          <span style={styles.tag}>Premium Selection</span>
          <h2 style={styles.sectionTitle}>Our Flagship Products</h2>
          <p style={styles.sectionSubtitle}>
            Explore elite futuristic designs engineered for high-performance and absolute aesthetic pleasure.
          </p>
        </div>
      </div>

      {/* 5 Lines Grid Container (Total 20 Items) */}
      <div style={styles.productGrid}>
        {productData.map((product) => (
          <div key={product.id} className="interactive-product-card" style={styles.card}>
            
            {/* Custom Dynamic Label Badge with Hover Effects Class */}
            <span className="animated-card-badge" style={styles.cardBadge}>{product.badge}</span>
            
            {/* Centered Image Frame */}
            <div style={styles.cardImageContainer}>
              <img className="zoom-product-img" src={product.img} alt={product.name} style={styles.cardImage} />
            </div>

            {/* Product Meta Info */}
            <div style={styles.infoContainer}>
              <h3 style={styles.cardTitle}>{product.name}</h3>
              
              <div style={styles.priceContainer}>
                <span style={styles.cardPrice}>{product.price}</span>
                <span style={styles.rating}>{product.rating}</span>
              </div>

              {/* Action Button with Multi-property Hover Inversion */}
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