export function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#07080c',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      color: '#ffffff',
      padding: '70px 6% 30px 6%',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    // Main 3-column layout based on your layout image
    grid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: '40px',
      marginBottom: '50px',
    },
    // Left column wrapper holding Brand Info and Contact Info stacked vertically
    leftColumnStack: {
      display: 'flex',
      flexDirection: 'column',
      gap: '50px', // Creates the vertical space between Orion description and Contact info
    },
    brandColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '380px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    logoIcon: {
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    },
    logoText: {
      fontSize: '22px',
      fontWeight: '800',
      letterSpacing: '1px',
      background: 'linear-gradient(135deg, #ffffff 40%, #a6adbb 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    brandDesc: {
      color: '#a6adbb',
      fontSize: '14px',
      lineHeight: '1.6',
      margin: 0,
    },
    // Links column container with right-aligned content matching image_96a4e6.png
    linkColumnRight: {
      textAlign: 'right',
    },
    heading: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#ffffff',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    link: {
      color: '#a6adbb',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    // Left-aligned Contact block positioned below brand description
    contactBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      textAlign: 'left',
    },
    contactText: {
      color: '#a6adbb',
      fontSize: '14px',
      lineHeight: '1.6',
      margin: 0,
    },
    highlightText: {
      color: '#00f2fe',
    },
    // Bottom Bar Styles
    bottomBar: {
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '15px',
    },
    copyright: {
      color: '#656a73',
      fontSize: '13px',
      margin: 0,
    },
    policyLinks: {
      display: 'flex',
      gap: '20px',
    },
    policyLink: {
      color: '#656a73',
      textDecoration: 'none',
      fontSize: '13px',
    }
  };

  return (
    <footer style={styles.footer}>
      {/* 3-Column Base Alignment Section */}
      <div style={styles.grid}>
        
        {/* Column 1: Brand Info & Contact Info Stacked (Left Side) */}
        <div style={styles.leftColumnStack}>
          {/* Top Piece: Logo and Desc */}
          <div style={styles.brandColumn}>
            <div style={styles.logoContainer}>
              <div><img src= "https://png.pngtree.com/template/20210302/ourmid/pngtree-electronic-shopping-cart-vector-logo-design-idea-image_493511.png" width="30px" height="30px" />  </div>
              <span style={styles.logoText}>ORION STORE</span>
            </div>
            <p style={styles.brandDesc}>
              Experience the future of tech. We bring you handpicked next-gen smart gadgets that perfectly balance aesthetics and premium performance.
            </p>
          </div>

          {/* Bottom Piece: Contact Details aligned underneath */}
          <div style={styles.contactBlock}>
            <h4 style={styles.heading}>Contact Info</h4>
            <p style={styles.contactText}>
              Email: <span style={styles.highlightText}>orion9@gmail.com</span>
            </p>
            <p style={styles.contactText}>
              Phone: <span style={styles.highlightText}>+91 1800056000</span>
            </p>
            <p style={styles.contactText}>
              Location: 102 Cyber Street, Mumbai, Maharashtra
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links (Right Aligned) */}
        <div style={styles.linkColumnRight}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="#home" style={styles.link}>Home</a></li>
            <li><a href="#about" style={styles.link}>About Us</a></li>
            <li><a href="#products" style={styles.link}>Our Collection</a></li>
            <li><a href="#testimonials" style={styles.link}>Customer Reviews</a></li>
          </ul>
        </div>

        {/* Column 3: Top Categories (Right Aligned) */}
        <div style={styles.linkColumnRight}>
          <h4 style={styles.heading}>Top Categories</h4>
          <ul style={styles.linkList}>
            <li><span style={styles.link}>Audio & Sound</span></li>
            <li><span style={styles.link}>Smart Wearables</span></li>
            <li><span style={styles.link}>PC Gaming Gear</span></li>
            <li><span style={styles.link}>Cameras & Optics</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal/Copyright Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Orion Store. All rights reserved.
        </p>
        <div style={styles.policyLinks}>
          <a href="#privacy" style={styles.policyLink}>Privacy Policy</a>
          <a href="#terms" style={styles.policyLink}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}