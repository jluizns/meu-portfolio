import minhaFoto from '../assets/minhaFoto.jpeg'; 

export default function About() {
  return (
    <section id="about" style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Sobre Mim</h2>
        <p style={styles.text}>
          Muito prazer, me chamo <strong>José Luiz</strong>. Sou graduando em Sistemas de Informação, atualmente assumo o cargo de Analista de Tecnologias Educacionais na Unifacisa e atuo diretamente no ecossistema de tecnologia desenvolvendo soluções completas de ponta a ponta. 
        </p>
        <p style={styles.text}>
          Diferente de desenvolvedores que apenas escrevem linhas de código que ninguém entende, eu tenho uma visão de negócios estruturada. Como microempreendedor, eu entendo que um sistema precisa ser rápido, bonito e, acima de tudo, <strong>trazer resultados reais e lucro</strong> para quem investe nele.
        </p>
        <p style={styles.text}>
          Minha missão é guiar você por toda a jornada tecnológica: desde lapidar e ajustar aquela sua ideia inicial que está no papel, desenhar uma arquitetura robusta, até gerenciar todo o desenvolvimento do zero e entregar uma plataforma pronta para rodar e escalar.
        </p>
      </div>
      
      {/* 2. Substituímos a caixa antiga por uma moldura para a sua foto */}
      <div style={styles.molduraFoto}>
        <img src={minhaFoto} alt="José Luiz" style={styles.foto} />
      </div>
    </section>
  );
}

const styles = {
  container: { 
    padding: '120px 0', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '60px', 
    flexWrap: 'wrap' 
  },
  content: { 
    flex: '1.2', 
    minWidth: '300px' 
  },
  title: { 
    fontSize: '2.8rem', 
    marginBottom: '25px', 
    color: '#fff',
    fontWeight: '800'
  },
  text: { 
    fontSize: '1.15rem', 
    color: '#9ca3af', 
    lineHeight: '1.8', 
    marginBottom: '20px' 
  },
  molduraFoto: { 
    flex: '0.8', 
    minWidth: '300px', 
    height: '400px', 
    borderRadius: '24px', 
    overflow: 'hidden', /* Garante que a foto respeite as bordas arredondadas */
    border: '2px solid rgba(139, 92, 246, 0.3)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', /* Faz a foto se ajustar perfeitamente ao tamanho da moldura sem distorcer */
  }
};