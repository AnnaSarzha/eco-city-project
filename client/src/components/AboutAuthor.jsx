import { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  MessageCircle, 
  Send, 
  GraduationCap, 
  Briefcase, 
  BookOpen,
  Lightbulb,
  Rocket,
  Target,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutAuthor.css';

function AboutAuthor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за сообщение! Я свяжусь с вами.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="about-author-page">
      {/* Мини-навигация */}
      <nav className="author-nav">
        <Link to="/" className="nav-back">
          <ArrowLeft size={20} />
          На главную
        </Link>
        <div className="nav-links">
          <a href="#about">Обо мне</a>
          <a href="#project">О проекте</a>
          <a href="#contact">Контакты</a>
        </div>
      </nav>

      <div className="author-container">
        {/* Шапка с фото */}
        <section className="author-header" id="about">
          <div className="photo-section">
            <div className="photo-placeholder">
  <img src="/photo.jpg" alt="Анна Саржан" />
</div>
          </div>
          
          <div className="info-section">
            <h1>Саржан Анна</h1>
            <p className="position">Студентка / Разработчик</p>
            
            <div className="details">
              <div className="detail-item">
                <BookOpen size={20} />
                <div>
                  <strong>Место обучения</strong>
                  <p>Колледж информатики и программирования Финансового университета при Правительстве Российской Федерации</p>
                </div>
              </div>
              
              <div className="detail-item">
                <Briefcase size={20} />
                <div>
                  <strong>Курс</strong>
                  <p>1 курс</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://vk.com/pelmen558" target="_blank" rel="noopener noreferrer" className="social-link vk">
                <MessageCircle size={20} />
                ВКонтакте
              </a>
              <a href="https://t.me/@AnnaSarzhan" target="_blank" rel="noopener noreferrer" className="social-link telegram">
                <MessageCircle size={20} />
                Telegram
              </a>
              <a href="252978@edu.fa.ru" className="social-link email">
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* О проекте */}
        <section className="project-section" id="project">
          <h2>О проекте Eco City Project</h2>
          
          <div className="project-content">
            <div className="project-block">
              <div className="block-header">
                <Lightbulb size={28} />
                <h3>Как появилась идея</h3>
              </div>
              <p>
                Идея проекта возникла из понимания актуальности экологических проблем 
                современных городов. Загрязнение воздуха, воды, почвы, шумовое и световое 
                загрязнение — всё это требует системного подхода и вовлечения жителей.
              </p>
            </div>
            
            <div className="project-block">
              <div className="block-header">
                <Rocket size={28} />
                <h3>Реализация</h3>
              </div>
              <p>
                Проект разработан с использованием современных веб-технологий:
              </p>
              <ul>
                <li><strong>Frontend:</strong> React + Vite</li>
                <li><strong>Карты:</strong> Leaflet (OpenStreetMap)</li>
                <li><strong>Стилизация:</strong> CSS3 с адаптивным дизайном</li>
                <li><strong>Хостинг:</strong> Vercel</li>
              </ul>
            </div>
            
            <div className="project-block">
              <div className="block-header">
                <Target size={28} />
                <h3>Цель проекта</h3>
              </div>
              <p>
                Создать удобную платформу для мониторинга экологических проблем города, 
                где каждый житель может сообщить о загрязнении и отслеживать их решение.
              </p>
            </div>
          </div>
        </section>

        {/* Контакты и форма */}
        <section className="contact-section" id="contact">
          <h2>Связаться со мной</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Контактная информация</h3>
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <strong>Email</strong>
                  <p>annasarzha@yandex.ru</p>
                </div>
              </div>
              <p className="contact-note">
                Вы можете написать мне на почту или через социальные сети. 
                Я всегда открыта для общения и готова ответить на вопросы!
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Форма обратной связи</h3>
              
              <div className="form-group">
                <label>Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-group">
                <label>Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <Send size={18} />
                Отправить сообщение
              </button>
            </form>
          </div>
        </section>

        {/* Футер */}
        <footer className="author-footer">
          <p>© 2026 Анна Саржан. Eco City Project</p>
          <p className="made-with-love">
            Сделано с <Heart size={16} className="heart-icon" /> для улучшения экологии города
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AboutAuthor;