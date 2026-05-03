import { useState } from 'react';
import { 
  Cloud, 
  Droplet, 
  Trash2, 
  Volume2, 
  Lightbulb, 
  Sprout,
  Send,
  CheckCircle
} from 'lucide-react';
import './Pollution.css';

function Pollution() {
  const [formData, setFormData] = useState({
    type: '',
    address: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
  {
    icon: Cloud,
    title: 'Загрязнение воздуха',
    description: 'Промышленные выбросы, автомобильные выхлопы, пыль',
    stat: '70% горожан дышат загрязнённым воздухом',
    color: '#2d6a4f'  // Тёмно-зелёный
  },
  {
    icon: Droplet,
    title: 'Загрязнение воды',
    description: 'Сточные воды, промышленные отходы, пластик',
    stat: '80% сточных вод сбрасывается без очистки',
    color: '#40916c'  // Средне-зелёный
  },
  {
    icon: Trash2,
    title: 'Твёрдые отходы',
    description: 'Бытовой мусор, строительные отходы, пластик',
    stat: '400 кг отходов производит человек в год',
    color: '#52b788'  // Светло-зелёный
  },
  {
    icon: Volume2,
    title: 'Шумовое загрязнение',
    description: 'Транспорт, стройки, промышленные объекты',
    stat: '80% горожан живут в зоне повышенного шума',
    color: '#74c69d'  // Мятный
  },
  {
    icon: Lightbulb,
    title: 'Световое загрязнение',
    description: 'Избыточное освещение, рекламные вывески',
    stat: 'Нарушает естественные биоритмы людей',
    color: '#95d5b2'  // Светло-мятный
  },
  {
    icon: Sprout,
    title: 'Загрязнение почвы',
    description: 'Химикаты, тяжёлые металлы, нефтепродукты',
    stat: '30% почв непригодны для сельского хозяйства',
    color: '#1b4332'  // Очень тёмный зелёный
  }
];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ type: '', address: '', description: '' });
    }, 3000);
  };

  return (
    <div className="pollution-page">
      {/* Заголовок страницы */}
      <section className="pollution-header">
        <h1>Виды загрязнений</h1>
        <p>Узнайте об основных экологических проблемах нашего города</p>
      </section>

      {/* Категории загрязнений */}
      <section className="pollution-categories">
        <div className="container">
          <h2>Категории проблем</h2>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card" style={{ borderColor: cat.color }}>
                <div className="category-icon" style={{ backgroundColor: cat.color + '20' }}>
                  <cat.icon size={40} color={cat.color} strokeWidth={1.5} />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="category-stat">{cat.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="pollution-stats">
        <div className="container">
          <h2>Статистика по городу</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>15%</h3>
              <p>Отходов перерабатывается</p>
            </div>
            <div className="stat-box">
              <h3>1.5 млн</h3>
              <p>Тонн отходов в год</p>
            </div>
            <div className="stat-box">
              <h3>70%</h3>
              <p>Загрязнений от транспорта</p>
            </div>
            <div className="stat-box">
              <h3>30%</h3>
              <p>Зелёных зон от нормы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма сообщения о проблеме */}
      <section className="pollution-form-section">
        <div className="container">
          <h2>Сообщить о проблеме</h2>
          <p>Если вы заметили загрязнение в своём районе, сообщите нам</p>
          
          {submitted ? (
            <div className="success-message">
              <CheckCircle size={48} color="#2e7d32" />
              <h3>Спасибо! Ваша заявка принята</h3>
              <p>Мы проверим информацию и свяжемся с вами</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pollution-form">
              <div className="form-group">
                <label htmlFor="type">Тип загрязнения</label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  required
                >
                  <option value="">Выберите тип</option>
                  <option value="air">Загрязнение воздуха</option>
                  <option value="water">Загрязнение воды</option>
                  <option value="waste">Твёрдые отходы</option>
                  <option value="noise">Шумовое загрязнение</option>
                  <option value="light">Световое загрязнение</option>
                  <option value="soil">Загрязнение почвы</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="address">Адрес или место</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="ул. Примерная, д. 10"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Описание проблемы</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Опишите проблему подробно..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                <Send size={20} />
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Pollution;