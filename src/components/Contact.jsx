import React from 'react';

export default function Contact() {
  // Usando direto do objeto React para evitar erros de importação no Vite
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const textoWhatsApp = `Olá José Luiz, me chamo ${name}. Gostaria de conversar sobre um projeto:\n\n${message}`;
    const url = `https://api.whatsapp.com/send?phone=5583981650468&text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Esta pronto para dar o primeiro passo?</h2>
        <p style={styles.text}>
          Preencha os dados ao lado ou me mande uma mensagem direta. Vamos desenhar juntos a arquitetura perfeita para o seu negócio lucrar e escalar.
        </p>
        <div style={styles.infoAdicional}>
          <span>📍 Campina Grande - PB (Atendimento para todo o Mundo)</span>
        </div>
      </div>

      <div style={styles.boxFormulario}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.campo}>
            <label style={styles.label}>Seu Nome</label>
            <input 
              type="text" 
              required 
              placeholder="Ex: João Silva" 
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.campo}>
            <label style={styles.label}>Seu E-mail</label>
            <input 
              type="email" 
              required 
              placeholder="joao@empresa.com" 
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.campo}>
            <label style={styles.label}>Fale brevemente sobre o seu projeto</label>
            <textarea 
              rows="4" 
              required 
              placeholder="Conte-me sua ideia, se precisa de IA, um SaaS, site do zero ou automação comercial..." 
              style={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" style={styles.botao}>Quero um Orçamento Exclusivo</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '100px 0',
    display: 'flex',
    gap: '60px',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  content: {
    flex: '1',
    minWidth: '300px'
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '800',
    marginBottom: '25px',
    lineHeight: '1.2',
    color: '#fff' // Garantiu que a cor do título fique branca e visível
  },
  text: {
    fontSize: '1.15rem',
    color: '#9ca3af',
    lineHeight: '1.7',
    marginBottom: '20px'
  },
  infoAdicional: {
    marginTop: '30px',
    color: '#a78bfa',
    fontWeight: '600',
    fontSize: '1rem'
  },
  boxFormulario: {
    flex: '1',
    minWidth: '320px',
    backgroundColor: '#111827',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  campo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#d1d5db'
  },
  input: {
    backgroundColor: '#1f2937',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '10px',
    padding: '14px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none'
  },
  textarea: {
    backgroundColor: '#1f2937',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '10px',
    padding: '14px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    resize: 'none',
    fontFamily: 'inherit'
  },
  botao: {
    backgroundColor: '#8b5cf6',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px',
    fontSize: '1.05rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
  }
};