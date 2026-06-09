export function About() {
    const styles = {
    section: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#0a0b10', // Consistent dark theme background
      color: '#ffffff',
      padding: '100px 6%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
      flexWrap: 'wrap',
    },
    // --- LEFT SIDE: CONTENT ---
    contentSide: {
      flex: '1',
      minWidth: '320px',
      maxWidth: '600px',
    },
    tag: {
      color: '#00f2fe',
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '15px',
      display: 'block',
    },
    title: {
      fontSize: '42px',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '25px',
      letterSpacing: '-1px',
    },
    description: {
      color: '#a6adbb',
      fontSize: '17px',
      lineHeight: '1.7',
      marginBottom: '40px',
    },
    // --- FEATURE LIST STYLES ---
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
    },
    iconWrapper: {
      width: '50px',
      height: '50px',
      borderRadius: '15px',
      background: 'rgba(0, 242, 254, 0.1)',
      border: '1px solid rgba(0, 242, 254, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '22px',
      flexShrink: 0,
    },
    featureTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 5px 0',
      color: '#ffffff',
    },
    featureDesc: {
      color: '#656a73',
      fontSize: '14px',
      margin: 0,
      lineHeight: '1.5',
    },
    // --- RIGHT SIDE: CREATIVE GRID ---
    visualSide: {
      flex: '1',
      minWidth: '320px',
      maxWidth: '500px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      position: 'relative',
    },
    bgGlow: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, transparent 70%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 0,
    },
    statCard: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '24px',
      padding: '35px 25px',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      zIndex: 1,
    },
    statCardOffset: {
      marginTop: '30px', // Creates an asymmetric creative layout look
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '10px',
      display: 'block',
    },
    statLabel: {
      color: '#a6adbb',
      fontSize: '14px',
      fontWeight: '500',
    }
  };

  const features = [
    {
      id: 1,
      icon: "✨",
      title: "Futuristic Innovation",
      desc: "Hum sirf products nahi bechte, hum next-generation lifestyle aur futuristic tech experience deliver karte hain."
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Certified Premium Quality",
      desc: "Orion Store par har ek electronic gadget strictly tested aur verified hota hai high performance ke liye."
    },
    {
      id: 3,
      icon: "⚡",
      title: "Ultra-Fast Delivery",
      desc: "Aapka pasandida gadget bina kisi delay ke ekdum secure aur fast global shipping system se aap tak pahunchega."
    }
  ];

  return (
    <section id="about" style={styles.section}>
      {/* Left Side: Text Content and Key Pillars */}
      <div style={styles.contentSide}>
        <span style={styles.tag}>Behind the Tech</span>
        <h2 style={styles.title}>We Are Redefining Modern Gadget Culture</h2>
        <p style={styles.description}>
          Welcome to Orion Store, the ultimate convergence of cutting-edge innovation and high-end design aesthetics. Hum tech enthusiasts ki ek aisi community hain jo har ek product me beauty aur powerhouse performance dono ko priority dete hain.
        </p>

        {/* Feature List */}
        <div style={styles.featureList}>
          {features.map((feature) => (
            <div key={feature.id} style={styles.featureItem}>
              <div style={styles.iconWrapper}>
                {feature.icon}
              </div>
              <div>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Creative Visual Stats Grid */}
      <div style={styles.visualSide}>
        <div style={styles.bgGlow}></div>
        
        {/* Card 1 */}
        <div style={styles.statCard}>
          <span style={styles.statNumber}>50K+</span>
          <span style={styles.statLabel}>Happy Tech Lovers</span>
        </div>

        {/* Card 2 (Offsetted) */}
        <div style={{ ...styles.statCard, ...styles.statCardOffset }}>
          <span style={styles.statNumber}>99.4%</span>
          <span style={styles.statLabel}>Satisfaction Rate</span>
        </div>

        {/* Card 3 */}
        <div style={styles.statCard}>
          <span style={styles.statNumber}>24/7</span>
          <span style={styles.statLabel}>Expert Support</span>
        </div>

        {/* Card 4 (Offsetted) */}
        <div style={{ ...styles.statCard, ...styles.statCardOffset }}>
          <span style={styles.statNumber}>15+</span>
          <span style={styles.statLabel}>Global Hubs</span>
        </div>
      </div>
    </section>
  );

}