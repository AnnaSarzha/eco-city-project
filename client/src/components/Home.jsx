import Slideshow from '../components/Slideshow';
import Statistics from '../components/Statistics';

function Home() {
  return (
    <div className="home-page">
      {/* Слайд-шоу */}
      <Slideshow />
      
      {/* Описание проекта */}
      <section className="about">
        <div className="container">
          <h2>Почему это важно?</h2>
          <p>
            Экологические проблемы городов требуют немедленного решения. 
            Наша платформа помогает отслеживать загрязнения, сообщать о проблемах 
            и находить точки переработки отходов.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>6</h3>
              <p>Категорий проблем</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Решённых проблем</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Активных пользователей</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Статистика */}
      <Statistics />
    </div>
  );
}

export default Home;