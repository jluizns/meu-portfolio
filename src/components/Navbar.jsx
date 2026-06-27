
export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>José Luiz<span>.</span>Dev</div>
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
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%', backgroundColor: 'rgba(11, 15, 25, 0.9)', backdropFilter: 'blur(10px)', position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1000, borderBottom: '1px solid rgba(255, 255, 255, 0.05)' },
  logo: { fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '30px' },
  link: { textDecoration: 'none', color: '#9ca3af', fontWeight: '500', transition: '0.3s' }
};