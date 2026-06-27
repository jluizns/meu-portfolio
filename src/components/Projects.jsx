export default function Projects() {
  const listaProjetos = [
    {
      id: 1,
      tag: "SaaS / Sistema Web Autônomo",
      titulo: "ApexAgenda — Sistema de Agendamento Automatizado & Gestão",
      descricao: "Um ecossistema completo desenvolvido para solucionar o gargalo de agendamentos e faltas em negócios de serviços (barbearias, clínicas e salões). O sistema permite que o cliente final agende sozinho em 3 clicks, reduzindo o tempo gasto no WhatsApp em até 70%.",
      beneficios: [
        "🔄 Automação ponta a ponta: Notificações e lembretes automáticos para reduzir o índice de ausências.",
        "📊 Painel do Dono: Gráficos de faturamento, serviços mais procurados e ticket médio em tempo real.",
        "⚡ Carregamento Ultra Rápido: Construído com arquitetura modular para rodar perfeitamente em qualquer celular."
      ]
    },
    {
      id: 2,
      tag: "E-commerce de Alta Performance",
      titulo: "NovaStore — Plataforma de Vendas Escalável com Painel Administrativo",
      descricao: "Desenvolvimento de uma loja virtual focada em altíssima velocidade de carregamento e experiência do usuário (UX), projetada para maximizar as conversões de vendas. Conta com um painel de controle completo para o lojista gerenciar toda a operação sem complicações.",
      beneficios: [
        "💳 Integração Segura com APIs: Sistema pronto para checkout fluido, cálculo de frete automático e pagamentos.",
        "📦 Gestão Simplificada: Painel administrativo para cadastro de produtos, controle de estoque e relatórios de vendas.",
        "🔒 Segurança Avançada: Estrutura blindada contra vazamento de dados e instabilidades em dias de grande volume."
      ]
    },
    {
      id: 3,
      tag: "Automação Comercial / CRM Interno",
      titulo: "CoreFlow — Dashboard de Operações e Gestão de Contratos do Zero",
      descricao: "Uma plataforma interna sob medida (CRM) criada para empresas prestadoras de serviço organizarem o fluxo comercial. O sistema centraliza desde a chegada de um novo cliente em potencial, passando pelo desenho das propostas, até a assinatura do contrato e entrega do projeto.",
      beneficios: [
        "📋 Funil de Vendas Visual: Organização clara do status de cada negociação ativa no mês.",
        "💼 Gerenciamento de Projetos: Distribuição de tarefas e prazos internos para evitar atrasos nas entregas.",
        "📈 Inteligência de Negócio: Métricas de conversão e faturamento futuro previsto para auxiliar na tomada de decisões."
      ]
    }
  ];

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.sectionTitle}>Soluções Desenvolvidas</h2>
      <p style={styles.sectionSubtitle}>
        Arquiteturas modernas projetadas do absoluto zero, focadas em resolver problemas reais de mercado, otimizar processos e gerar lucro.
      </p>

      <div style={styles.gridProjetos}>
        {listaProjetos.map((projeto) => (
          <div key={projeto.id} style={styles.card}>
            <div style={styles.content}>
              <span style={styles.tag}>{projeto.tag}</span>
              <h3 style={styles.titulo}>{projeto.titulo}</h3>
              <p style={styles.descricao}>{projeto.descricao}</p>
              
              <div style={styles.beneficiosList}>
                {projeto.beneficios.map((beneficio, index) => (
                  <div key={index} style={styles.beneficioItem}>
                    {beneficio}
                  </div>
                ))}
              </div>
            </div>
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
    maxWidth: '700px',
    margin: '0 auto 60px auto',
    lineHeight: '1.6'
  },
  gridProjetos: {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px' /* Diminuí um pouco o espaçamento entre os cards já que eles ficaram mais compactos */
  },
  card: {
    display: 'flex',
    backgroundColor: '#111827',
    borderRadius: '24px',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  },
  content: {
    flex: '1',
    padding: '45px 50px', /* Aumentei o espaçamento interno para dar um ar mais "respirável" e premium */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  tag: {
    alignSelf: 'flex-start',
    fontSize: '0.85rem',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    color: '#a78bfa',
    padding: '6px 14px',
    borderRadius: '20px',
    fontWeight: '700',
    marginBottom: '15px',
    letterSpacing: '0.5px'
  },
  titulo: {
    fontSize: '1.9rem', /* Aumentei um pouquinho o tamanho já que ganhou mais espaço */
    fontWeight: '800',
    marginBottom: '15px',
    lineHeight: '1.3'
  },
  descricao: {
    color: '#9ca3af',
    fontSize: '1.05rem',
    lineHeight: '1.7',
    marginBottom: '25px'
  },
  beneficiosList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  beneficioItem: {
    fontSize: '0.95rem',
    color: '#d1d5db',
    lineHeight: '1.5',
    borderLeft: '3px solid #8b5cf6',
    paddingLeft: '12px'
  }
};