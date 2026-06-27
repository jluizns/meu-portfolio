export default function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Nome atualizado para Luiz.dev */}
      <div style={styles.logo}>
        Luiz<span style={styles.logoDot}>.</span>dev
      </div>
      
      <ul style={styles.navLinks}>
        <li><a href="#about" style={styles.link}>Sobre</a></li>
        <li><a href="#projects" style={styles.link}>Projetos</a></li>
        <li><a href="#services" style={styles.link}>Serviços</a></li>
        <li><a href="#contact" style={styles.link}>Contato</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: { 
    display: 'flex', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    gap: '15px', 
    padding: '20px 5%', 
    backgroundColor: 'rgba(11, 15, 25, 0.95)', 
    backdropFilter: 'blur(10px)', 
    position: 'fixed', 
    width: '100%', 
    boxSizing: 'border-box', 
    top: 0, 
    left: 0, 
    zIndex: 1000, 
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    justifyContent: 'space-between' // Mantido apenas este, que joga a logo pra esquerda e links pra direita
  },
  logo: { 
    fontSize: '22px', 
    fontWeight: 'bold', 
    letterSpacing: '1px',
    color: '#ffffff'
  },
  logoDot: {
    color: '#00e5ff'
  },
  navLinks: { 
    display: 'flex', 
    listStyle: 'none', 
    gap: '20px', 
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
    justifyContent: 'center' 
  },
  link: { 
    textDecoration: 'none', 
    color: '#9ca3af', 
    fontWeight: '500', 
    fontSize: '15px', 
    transition: '0.3s' 
  }
};