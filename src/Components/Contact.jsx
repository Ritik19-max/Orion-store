export function Contact() {
  const styles = {
    container: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#0a0b10', // Consistent dark theme background
      color: '#ffffff',
      minHeight: '100vh',
      padding: '100px 6% 80px 6%',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    tag: {
      color: '#00f2fe',
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      marginBottom: '12px',
      display: 'block',
    },
    title: {
      fontSize: '42px',
      fontWeight: '800',
      margin: 0,
      letterSpacing: '-1px',
    },
    subtitle: {
      color: '#a6adbb',
      fontSize: '16px',
      marginTop: '12px',
    },
    // --- MAIN CONTENT SPLIT LAYOUT ---
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '50px',
      alignItems: 'start',
    },
    // --- LEFT SIDE: INFO CARDS ---
    infoSide: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    infoCard: {
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    },
    iconWrapper: {
      width: '55px',
      height: '55px',
      borderRadius: '16px',
      background: 'rgba(0, 242, 254, 0.08)',
      border: '1px solid rgba(0, 242, 254, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      flexShrink: 0,
    },
    cardTitle: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#a6adbb',
      margin: '0 0 5px 0',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    cardDetail: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#ffffff',
      margin: 0,
    },
    // --- RIGHT SIDE: PREMIUM FORM ---
    formSide: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.00) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    formGroup: {
      marginBottom: '25px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#a6adbb',
      letterSpacing: '0.5px',
    },
    input: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '14px',
      padding: '15px 18px',
      fontSize: '15px',
      color: '#ffffff',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    textarea: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '14px',
      padding: '15px 18px',
      fontSize: '15px',
      color: '#ffffff',
      outline: 'none',
      boxSizing: 'border-box',
      minHeight: '140px',
      resize: 'vertical',
      fontFamily: 'inherit',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    btnSubmit: {
      background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      color: '#0a0b10',
      width: '100%',
      padding: '15px 30px',
      borderRadius: '16px',
      fontWeight: '700',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 10px 20px rgba(0, 242, 254, 0.15)',
    },
  };

  return (
    <div style={styles.container}>
      
      {/* Header Block */}
      <div style={styles.header}>
        <span style={styles.tag}>Get In Touch</span>
        <h1 style={styles.title}>Connect With Our Core Tech Hub</h1>
        <p style={styles.subtitle}>Koi queries hain ya bulk order support chahiye? Humse contact karein.</p>
      </div>

      {/* Main Container Layout */}
      <div style={styles.contentGrid}>
        
        {/* Left Column: Interactive Contact Info Links */}
        <div style={styles.infoSide}>
          
          {/* Card 1: Email */}
          <div style={styles.infoCard}>
            <div style={styles.iconWrapper}>✉️</div>
            <div>
              <p style={styles.cardTitle}>Official Support Email</p>
              <p style={styles.cardDetail}>orion9@gmail.com</p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div style={styles.infoCard}>
            <div style={styles.iconWrapper}>📞</div>
            <div>
              <p style={styles.cardTitle}>24/7 Hotline Number</p>
              <p style={styles.cardDetail}>+91 1800056000</p>
            </div>
          </div>

          {/* Card 3: Location */}
          <div style={styles.infoCard}>
            <div style={styles.iconWrapper}>📍</div>
            <div>
              <p style={styles.cardTitle}>Main Experience Center</p>
              <p style={styles.cardDetail}>102 Cyber Street, Mumbai, MH</p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div style={styles.infoCard}>
            <div style={styles.iconWrapper}>⏱️</div>
            <div>
              <p style={styles.cardTitle}>Operational Timings</p>
              <p style={styles.cardDetail}>Mon - Sat: 10:00 AM - 08:00 PM</p>
            </div>
          </div>

        </div>

        {/* Right Column: Premium Contact Form Grid */}
        <div style={styles.formSide}>
          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Name */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                style={styles.input} 
                onFocus={(e) => {
                  e.target.style.borderColor = '#00f2fe';
                  e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Input Email */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input 
                type="email" 
                placeholder="username@domain.com" 
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00f2fe';
                  e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Input Subject */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Inquiry Subject</label>
              <input 
                type="text" 
                placeholder="Order tracking, partnership, etc." 
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00f2fe';
                  e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Input Message Area */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Message</label>
              <textarea 
                placeholder="Write your detailed message here..." 
                style={styles.textarea}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00f2fe';
                  e.target.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.boxShadow = 'none';
                }}
              ></textarea>
            </div>

            {/* Action Trigger Button */}
            <button type="submit" style={styles.btnSubmit}>
              Transmit Message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}