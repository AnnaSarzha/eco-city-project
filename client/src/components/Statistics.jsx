import { 
  Cloud, 
  Trash2, 
  Recycle, 
  Droplet, 
  Trees, 
  Car, 
  Battery,
  Volume2,  // Для шума
  Zap       // Для энергии
} from 'lucide-react';
import './Statistics.css';

function Statistics() {
  const stats = [
  {
    icon: Cloud,
    number: '70%',
    text: 'горожан дышат воздухом с превышением норм загрязнения',
    color: '#2d6a4f'  // Тёмно-зелёный
  },
  {
    icon: Trash2,
    number: '400 кг',
    text: 'отходов производит каждый человек в год',
    color: '#40916c'  // Средне-зелёный
  },
  {
    icon: Recycle,
    number: '15%',
    text: 'отходов перерабатывается в России',
    color: '#52b788'  // Светло-зелёный
  },
  {
    icon: Droplet,
    number: '2 млрд',
    text: 'человек не имеют доступа к чистой воде',
    color: '#74c69d'  // Мятный
  },
  {
    icon: Trees,
    number: '3 млн га',
    text: 'лесов уничтожается ежегодно',
    color: '#95d5b2'  // Светло-мятный
  },
  {
    icon: Car,
    number: '70%',
    text: 'городских загрязнений от автотранспорта',
    color: '#1b4332'  // Очень тёмный зелёный
  },
  {
    icon: Battery,
    number: '400 л',
    text: 'воды загрязняет одна батарейка',
    color: '#2d6a4f'  // Тёмно-зелёный
  },
  {
    icon: Volume2,  // Иконка для шума
    number: '80%',
    text: 'горожан живут в зоне повышенного шума',
    color: '#40916c'  // Средне-зелёный
  },
  {
    icon: Zap,  // Иконка для энергии
    number: '30%',
    text: 'энергии расходуется впустую',
    color: '#52b788'  // Светло-зелёный
  }
];

  return (
    <section className="statistics-section">
      <div className="container">
        <h2 className="statistics-title">Экологические факты</h2>
        <p className="statistics-subtitle">
          Цифры, которые заставляют задуматься
        </p>
        
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ borderColor: stat.color }}>
              <div className="stat-icon" style={{ backgroundColor: stat.color + '20' }}>
                <stat.icon size={40} color={stat.color} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;