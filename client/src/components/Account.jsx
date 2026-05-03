import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Mail, Calendar } from 'lucide-react';
import './Account.css';

function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем, вошёл ли пользователь
    const loggedIn = localStorage.getItem('isLoggedIn');
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      setUserName(name || 'Пользователь');
      setUserEmail(email || 'email@example.com');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/');
  };

  if (!isLoggedIn) {
    // Если не вошёл — показываем форму входа
    return (
      <div className="account-page">
        <div className="account-container">
          <div className="account-card">
            <div className="account-icon">
              <User size={64} color="#2e7d32" />
            </div>
            
            <h1 className="account-title">Личный кабинет</h1>
            <p className="account-subtitle">
              Войдите, чтобы управлять своим профилем и отслеживать заявки
            </p>
            
            <div className="account-actions">
              <Link to="/login" className="account-button primary">
                Войти
              </Link>
              <Link to="/register" className="account-button secondary">
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Если вошёл — показываем профиль
  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-card">
          <div className="account-header">
            <div className="account-avatar">
              <User size={64} color="#2e7d32" />
            </div>
            <h1 className="account-title">Привет, {userName}!</h1>
          </div>
          
          <div className="account-info">
            <div className="info-item">
              <Mail size={20} color="#666" />
              <div className="info-content">
                <span className="info-label">Email</span>
                <span className="info-value">{userEmail}</span>
              </div>
            </div>
            
            <div className="info-item">
              <Calendar size={20} color="#666" />
              <div className="info-content">
                <span className="info-label">Дата регистрации</span>
                <span className="info-value">Сегодня</span>
              </div>
            </div>
          </div>
          
          <div className="account-stats">
            <div className="stat-box">
              <h3>0</h3>
              <p>Заявок</p>
            </div>
            <div className="stat-box">
              <h3>0</h3>
              <p>Решено</p>
            </div>
            <div className="stat-box">
              <h3>0</h3>
              <p>Баллов</p>
            </div>
          </div>
          
          <button onClick={handleLogout} className="logout-button">
            <LogOut size={20} />
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;