import './metricas-faixa.css';

// TODO: cliente confirma os valores e labels das métricas
const METRICAS = [
  { valor: '+300', label: 'Projetos elétricos aprovados' },
  { valor: '+10',  label: 'anos no mercado' },
  { valor: '+25MW', label: 'Projetos de conexão' },
  { valor: '+15',  label: 'cidades atendidas' },
];

export default function MetricasFaixa() {
  return (
    <section className="mf-section" aria-label="Números da empresa">
      <div className="mf-grid">
        {METRICAS.map((m) => (
          <div key={m.valor} className="mf-item">
            <span className="mf-valor">{m.valor}</span>
            <span className="mf-label">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
