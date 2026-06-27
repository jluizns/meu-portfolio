import minhaFoto from '../assets/minhaFoto.jpeg'; 

export default function About() {
  return (
    <section id="about" style={styles.container}>
      
      {/* 1. MOLDURA DA FOTO (No celular ela vai para o topo automaticamente devido ao flex-wrap e ordem) */}
      <div style={styles.molduraFoto}>
        <img src={minhaFoto} alt="José Luiz" style={styles.foto} />
      </div>

      {/* 2. CONTEÚDO DE TEXTO */}
      <div style={styles.content}>
        <h2 style={styles.title}>Sobre Mim</h2>
        <p style={styles.text}>
          Muito prazer, me chamo <strong>José Luiz</strong>. Sou graduando em Sistemas de Informação, atualmente assumo o cargo de Analista de Tecnologias Educacionais na Unifacisa e atuo diretamente no ecossistema de tecnologia desenvolvendo soluções completas de ponta a ponta. 
        </p>
        <p style={styles.text}>
          Diferente de desenvolvedores que apenas escrevem linhas de código que ninguém entende, eu tenho uma visão de negócios estruturada. Como microempreendedor, eu entendo que um sistema precisa ser rápido, bonito e, acima de tudo, <strong>trazer resultados reais e lucro</strong> para quem investe nele.
        </p>
        <p style={styles.text}>
          Minha missão é guiar você por toda a jornada tecnológica: desde lapidar e ajustar aquela sua ideia inicial que está no papel, desenhar uma arquitetura robusta, até gerenciar todo elo desenvolvimento do zero e entregar uma plataforma pronta para rodar e escalar.
        </p>

        {/* 3. BLOCO DE CONTATO AJUSTADO (Fica lindo no PC e se empilha no celular) */}
        <div style={styles.contatoBlock}>
          <p style={styles.contatoTexto}>Quer tirar o seu projeto do papel?</p>
          <a href="#contact" style={styles.contatoBotao}>Entre em contato</a>
        </div>
      </div>
      
    </section>
  );
}

const styles = {
  container: { 
    padding: '100px 5%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    gap: '40px', 
    flexWrap: 'wrap-reverse', // TRUQUE: Faz a foto ficar no TOPO no celular e o texto embaixo! No PC, mantém lado a lado.
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  content: { 
    flex: '1.2', 
    minWidth: '280px', // Evita que passe das bordas de celulares bem pequenos
  },
  title: { 
    fontSize: '2.5rem', 
    marginBottom: '20px', 
    color: '#fff',
    fontWeight: '800',
    textAlign: 'inherit' // Respeita o fluxo natural
  },
  text: { 
    fontSize: '1.1rem', 
    color: '#9ca3af', 
    lineHeight: '1.7', 
    marginBottom: '20px' 
  },
  molduraFoto: { 
    flex: '0.8', 
    minWidth: '280px', 
    maxWidth: '360px', // Define um limite para a foto não ficar gigante no monitor
    width: '100%', // No celular, ela se adapta perfeitamente à largura da tela
    aspectRatio: '1 / 1', // Torna a moldura perfeitamente quadrada e responsiva (tchau height fixo!)
    borderRadius: '24px', 
    overflow: 'hidden', 
    border: '2px solid rgba(139, 92, 246, 0.3)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
  },
  // NOVOS ESTILOS PARA O BLOCO DE CONTATO RESPONSIVO:
  contatoBlock: {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexWrap: 'wrap', // Permite que o botão vá para baixo do texto se não couber no celular
    alignItems: 'center',
    gap: '20px'
  },
  contatoTexto: {
    fontSize: '1.15rem',
    color: '#00e5ff',
    fontWeight: '600',
    margin: 0
  },
  contatoBotao: {
    display: 'inline-block',
    padding: '12px 28px',
    backgroundColor: '#8b5cf6',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)',
    transition: '0.3s',
    textAlign: 'center'
  }
};