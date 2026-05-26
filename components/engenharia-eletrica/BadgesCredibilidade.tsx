// TODO: cliente confirma os 3 badges — sugestão atual abaixo
const BADGES = [
  'CREA Ativo',
  'ART emitida',
  '+10 anos no mercado',
];

export default function BadgesCredibilidade() {
  return (
    <ul className="he-badges" aria-label="Credenciais da empresa">
      {BADGES.map((text) => (
        <li key={text} className="he-badge">
          {text}
        </li>
      ))}
    </ul>
  );
}
