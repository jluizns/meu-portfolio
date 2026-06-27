export default function Hero() {
  return (
    <section id="hero" style={styles.container}>
      <h1 style={styles.title}>
        Transformando Ideias em <span style={styles.gradientText}>Sistemas de Alto Impacto</span>
      </h1>
      <p style={styles.subtitle}>
        Não se preocupe com linhas de código, servidores ou travar no meio do caminho. Eu assumo o gerenciamento do seu projeto do absoluto zero até a entrega final, moldando sua visão e garantindo suporte total contínuo. Vamos tirar o seu projeto do papel com excelência tecnológica?
      </p>
      <a href="#contact" style={styles.button}>Vamos Conversar?</a>
    </section>
  );
}

const styles = {
  container: { 
    minHeight: '85vh', /* Ocupa a maior parte da tela inicial, mas libera espaço para a próxima seção aparecer levemente */
    padding: '100px 0 60px 0', /* Garante um respiro controlado no topo e na base */
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center' 
  },
  title: { 
    fontSize: '3.2rem', 
    maxWidth: '800px', 
    marginBottom: '20px', 
    fontWeight: '800', 
    lineHeight: '1.2' 
  },
  gradientText: { 
    background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)', 
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent' 
  },
  subtitle: { 
    fontSize: '1.2rem', 
    color: '#9ca3af', 
    maxWidth: '750px', /* Aumentei um pouquinho a largura máxima para o texto acomodar bem a nova frase */
    marginBottom: '40px', 
    lineHeight: '1.6' 
  },
  button: { 
    padding: '14px 35px', 
    backgroundColor: '#8b5cf6', 
    color: '#fff', 
    borderRadius: '30px', 
    fontWeight: '600', 
    textDecoration: 'none', 
    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)' 
  }
};