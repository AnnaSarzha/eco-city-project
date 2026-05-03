import { Github, Globe, GraduationCap, Code, Heart } from 'lucide-react';
import './Author.css';

function Author() {
  return (
    <section className="author-section">
      <div className="author-container">
        <div className="author-header">
          <Heart className="heart-icon" size={32} />
          <h2>О разработчике</h2>
          <Heart className="heart-icon" size={32} />
        </div>
        
        <div className="author-content">
          <div className="author-info">
            <div className="info-item">
              <div className="info-icon">
                <GraduationCap size={24} />
              </div>
              <div className="info-text">
                <h3>Разработчик</h3>
                <p>Анна Саржа</p>
                <span>Студентка</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Code size={24} />
              </div>
              <div className="info-text">
                <h3>Технологии</h3>
                <p>React + Vite + Leaflet</p>
                <span>Современный стек</span>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Globe size={24} />
              </div>
              <div className="info-text">
                <h3>Проект</h3>
                <p>Eco City Project</p>
                <span>2026 год</span>
              </div>
            </div>
          </div>
          
          <div className="author-links">
            <a 
              href="https://github.com/AnnaSarzha/eco-city-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-button github"
            >
              <Github size={20} />
              <span>GitHub репозиторий</span>
            </a>
            
            <a 
              href="https://eco-city-project.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-button vercel"
            >
              <Globe size={20} />
              <span>Сайт на Vercel</span>
            </a>
          </div>
          
          <div className="author-footer">
            <p>Сделано с 💚 для улучшения экологии города</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;