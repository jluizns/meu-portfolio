export default function Services() {
  const servicos = [
    {
      id: 1,
      emoji: "🤖",
      titulo: "Soluções com Inteligência Artificial & Chatbots",
      descricao: "Chega de perder vendas por demora no atendimento. Desenvolvo agentes virtuais inteligentes e chatbots integrados ao WhatsApp que qualificam leads, respondem dúvidas frequentes e realizam agendamentos sozinhos, simulando uma conversa humana 24 horas por dia."
    },
    {
      id: 2,
      emoji: "🚀",
      titulo: "Sistemas & Sites Criados do Absoluto Zero",
      descricao: "Nada de modelos prontos e travados. Eu gerencio e construo sua plataforma do zero (Landing Pages Premium, SaaS, E-commerces), moldando o código exatamente para a realidade do seu modelo de negócio, com altíssima velocidade e foco total em conversão."
    },
    {
      id: 3,
      emoji: "📈",
      titulo: "Dashboards de Gestão & Automação de Processos",
      descricao: "Transforme planilhas bagunçadas em painéis visuais inteligentes (CRMs e ERPs customizados). Desenvolvo ferramentas internas para centralizar o controle de estoque, faturamento, propostas e clientes, automatizando as tarefas chatas e repetitivas da sua empresa."
    },
    {
      id: 4,
      emoji: "⚙️",
      titulo: "Suporte, Manutenção & Otimização",
      descricao: "Seu site atual está lento, caindo ou desatualizado? Eu assumo o controle. Faço uma varredura completa na arquitetura, corrijo bugs, otimizo o tempo de carregamento e dou o suporte contínuo necessário para o seu sistema nunca te deixar na mão."
    }
  ];

  return (
    <section id="services" style={styles.container}>
      <h2 style={styles.sectionTitle}>Como Posso Ajudar o Seu Negócio?</h2>
      <p style={styles.sectionSubtitle}>
        Do código à inteligência artificial. Entrego soluções tecnológicas de ponta a ponta que estruturam sua operação e multiplicam seus resultados.
      </p>

      <div style={styles.gridServicos}>
        {servicos.map((servico) => (
          <div key={servico.id} style={styles.card}>
            <div style={styles.emojiContainer}>{servico.emoji}</div>
            <h3 style={styles.cardTitulo}>{servico.titulo}</h3>
            <p style={styles.cardDescricao}>{servico.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '100px 0'
  },
  sectionTitle: {
    fontSize: '2.8rem',
    textAlign: 'center',
    marginBottom: '10px',
    fontWeight: '800'
  },
  sectionSubtitle: {
    color: '#9ca3af',
    fontSize: '1.2rem',
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto 60px auto',
    lineHeight: '1.6'
  },
  gridServicos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px'
  },
  card: {
    backgroundColor: '#111827',
    borderRadius: '20px',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    padding: '40px 30px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  emojiContainer: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    padding: '10px 15px',
    borderRadius: '12px',
    display: 'inline-block'
  },
  cardTitulo: {
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '15px',
    lineHeight: '1.4',
    color: '#fff'
  },
  cardDescricao: {
    color: '#9ca3af',
    fontSize: '1rem',
    lineHeight: '1.6'
  }
};