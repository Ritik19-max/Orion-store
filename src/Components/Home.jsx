export function Home() {
  const styles = {
    container: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#0a0b10', 
      color: '#ffffff',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    // --- HOVER ANIMATION SHEET INJECTION ---
    animationSheet: (
      <style>{`
        /* Primary Button Animations */
        .hover-btn-primary {
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease !important;
        }
        .hover-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 15px 30px rgba(0, 242, 254, 0.45) !important;
        }

        /* Category Card Hover Depth */
        .hover-cat-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .hover-cat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 242, 254, 0.3) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 242, 254, 0.05) !important;
        }
        .hover-cat-card:hover .cat-glow-spot {
          opacity: 0.35 !important;
          transform: scale(1.2);
        }

        /* Product Grid Items Hover */
        .hover-product-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .hover-product-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 242, 254, 0.2) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5) !important;
        }
        .hover-product-card:hover img {
          transform: scale(1.05);
        }

        /* Product Secondary Action Button Hover */
        .hover-btn-secondary {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease !important;
        }
        .hover-btn-secondary:hover {
          background-color: rgba(0, 242, 254, 0.08) !important;
          border-color: #00f2fe !important;
          color: #00f2fe !important;
          transform: scale(1.02);
        }

        /* Testimonial Elements Hover */
        .hover-testimonial-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease !important;
        }
        .hover-testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(79, 172, 254, 0.25) !important;
        }

        /* Standard Image Transition */
        .smooth-img {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
      `}</style>
    ),
    // --- HERO SECTION STYLES ---
    hero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '100px 6% 80px 6%',
      background: 'radial-gradient(circle at 80% 20%, rgba(79, 172, 254, 0.15) 0%, transparent 50%)',
    },
    heroContent: {
      maxWidth: '550px',
    },
    heroTag: {
      color: '#00f2fe',
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '15px',
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: '800',
      lineHeight: '1.1',
      marginBottom: '20px',
      letterSpacing: '-1px',
    },
    heroSubtitle: {
      color: '#a6adbb',
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '35px',
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      color: '#0a0b10',
      padding: '14px 30px',
      borderRadius: '25px',
      fontWeight: '700',
      textDecoration: 'none',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 10px 20px rgba(0, 242, 254, 0.2)',
    },
    heroImageContainer: {
      position: 'relative',
    },
    heroImageCircle: {
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(0,242,254,0.2) 0%, rgba(79,172,254,0.05) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroImage: {
      width: '320px',
      height: '320px',
      objectFit: 'contain',
      filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.7))',
    },
    // --- GENERAL SECTION STYLES ---
    section: {
      padding: '60px 6% 60px 6%',
    },
    sectionHeader: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: '700',
      margin: '0 0 10px 0',
    },
    sectionSubtitle: {
      color: '#a6adbb',
      fontSize: '16px',
      margin: 0,
    },
    // --- CREATIVE CATEGORIES STYLES ---
    categoryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '25px',
    },
    categoryCard: {
      position: 'relative',
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '24px',
      padding: '40px 25px',
      textAlign: 'center',
      cursor: 'pointer',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    },
    cardGlow: {
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'rgba(0, 242, 254, 0.15)',
      filter: 'blur(20px)',
      transition: 'transform 0.4s ease, opacity 0.4s ease',
    },
    categoryIconWrapper: {
      width: '70px',
      height: '70px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(0, 242, 254, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px auto',
      boxShadow: 'inset 0 0 15px rgba(0, 242, 254, 0.05)',
    },
    categoryIcon: {
      fontSize: '30px',
    },
    categoryName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#ffffff',
      display: 'block',
      marginBottom: '8px',
    },
    categoryCount: {
      fontSize: '13px',
      color: '#00f2fe',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    // --- PRODUCTS STYLES (3 Lines Grid) ---
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '25px',
      textAlign: 'center',
    },
    cardImageContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '20px',
      height: '180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    cardImage: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
    },
    cardTitle: {
      fontSize: '17px',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#ffffff',
      height: '40px',
      overflow: 'hidden',
    },
    cardPrice: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#00f2fe',
      marginBottom: '15px',
    },
    btnSecondary: {
      background: 'transparent',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '10px 20px',
      borderRadius: '20px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
    },
    // --- TESTIMONIALS STYLES ---
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    testimonialCard: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '30px',
      position: 'relative',
    },
    stars: {
      color: '#00f2fe',
      marginBottom: '15px',
      fontSize: '18px',
    },
    feedback: {
      color: '#a6adbb',
      fontSize: '15px',
      lineHeight: '1.6',
      fontStyle: 'italic',
      marginBottom: '20px',
    },
    userContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: '#00f2fe',
    },
    userName: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#ffffff',
    },
    userRole: {
      fontSize: '12px',
      color: '#a6adbb',
      display: 'block',
    }
  };

  const categories = [
    { id: 1, name: 'Audio & Sound', icon: '🎧', items: '240+ Products' },
    { id: 2, name: 'Smart Wearables', icon: '⌚', items: '180+ Products' },
    { id: 3, name: 'PC Gaming Gear', icon: '⌨️', items: '310+ Products' },
    { id: 4, name: 'Cameras & Optics', icon: '📷', items: '95+ Products' }
  ];

  const products = [
    { id: 1, name: "Orion SoundPulse Wireless Headphones", price: "$249.00", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Orion Chrono Smartwatch Series 5", price: "$199.00", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Orion Nebula Mechanical Keyboard", price: "$129.00", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 4, name: "Orion StreamCam 4K Ultra HD", price: "$159.00", img: "https://images.unsplash.com/photo-1600856209923-34372e319a5d?w=500&q=80" },
    
    { id: 5, name: "Orion Pro ANC Earbuds", price: "$149.00", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" },
    { id: 6, name: "Orion Quantum Gaming Mouse", price: "$89.00", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 7, name: "Orion Horizon Curved Monitor 32\"", price: "$449.00", img: "https://www.reletechdigital.com/cdn/shop/files/reletech-4k-165hz-gaming-monitor-r34v-horizon-3065393.jpg?v=1766475132s" },
    { id: 8, name: "Orion SoundBar Cinema X", price: "$299.00", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80" },
    
    { id: 9, name: "Orion MagSafe Power Hub", price: "$69.00", img: "https://applepremiumstore.com.ng/wp-content/uploads/2025/01/Powerology-Power-Hub-Magsafe-Power-Hub-Wireless-charging-Black-PWCUQC014-1.jpg" },
    { id: 10, name: "Orion Drone Phantom View", price: "$799.00", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&q=80" },
    { id: 11, name: "Orion VR Apex Headset", price: "$399.00", img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&q=80" },
    { id: 12, name: "Orion PureStream Mic Pro", price: "$119.00", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80" }
  ];

  const testimonials = [
    { id: 1, name: "Alex Rivera", role: "Tech Reviewer", initial: "AR", text: "The SoundPulse headphones are unbelievable. The battery lasts for days and the design looks extremely futuristic. Orion Store delivered it in just 2 days!" },
    { id: 2, name: "Sarah Jenkins", role: "UI/UX Designer", initial: "SJ", text: "I ordered the mechanical keyboard and curved monitor. The sleek minimalism fits perfectly into my premium setup workspace. Highly recommended!" },
    { id: 3, name: "Rohit Polley", role: "Hardcore Gamer", initial: "RP", text: "Quantum mouse ka response time zero lag hai. Pure premium built material aur look design waise hi mila jaisa images me dikhaya gaya tha." }
  ];

  return (
    <div style={styles.container}>
      {/* Inject Style Classes for Hover Effects */}
      {styles.animationSheet}
      
      {/* 1. Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroTag}>Welcome to the Future</div>
          <h1 style={styles.heroTitle}>Next-Gen Electronics For Your Lifestyle</h1>
          <p style={styles.heroSubtitle}>
            Experience the ultimate blend of aesthetics and high performance. Discover our premium collection of handpicked smart gadgets.
          </p>
          <button className="hover-btn-primary" style={styles.btnPrimary}>Explore Store</button>
        </div>

        <div style={styles.heroImageContainer}>
          <div style={styles.heroImageCircle}>
            <img 
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80" 
              alt="Premium Gadget" 
              style={styles.heroImage} 
            />
          </div>
        </div>
      </header>

      {/* 2. Creative Categories Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Explore Collections</h2>
          <p style={styles.sectionSubtitle}>Handpicked premium gear categorized for your needs</p>
        </div>
        <div style={styles.categoryGrid}>
          {categories.map((cat) => (
            <div key={cat.id} className="hover-cat-card" style={styles.categoryCard}>
              <div className="cat-glow-spot" style={styles.cardGlow}></div>
              <div style={styles.categoryIconWrapper}>
                <span style={styles.categoryIcon}>{cat.icon}</span>
              </div>
              <span style={styles.categoryName}>{cat.name}</span>
              <span style={styles.categoryCount}>{cat.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products Section (3 Lines / 12 Items) */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Premium Collection</h2>
          <p style={styles.sectionSubtitle}>Discover elite designs crafted for ultimate performance</p>
        </div>
        <div style={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className="hover-product-card" style={styles.card}>
              <div style={styles.cardImageContainer}>
                <img className="smooth-img" src={product.img} alt={product.name} style={styles.cardImage} />
              </div>
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <div style={styles.cardPrice}>{product.price}</div>
              <button className="hover-btn-secondary" style={styles.btnSecondary}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
          <p style={styles.sectionSubtitle}>Real reviews from tech lovers around the world</p>
        </div>
        <div style={styles.testimonialGrid}>
          {testimonials.map((test) => (
            <div key={test.id} className="hover-testimonial-card" style={styles.testimonialCard}>
              <div style={styles.stars}>★★★★★</div>
              <p style={styles.feedback}>"{test.text}"</p>
              <div style={styles.userContainer}>
                <div style={styles.avatar}>{test.initial}</div>
                <div>
                  <span style={styles.userName}>{test.name}</span>
                  <span style={styles.userRole}>{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}