import { Home, BarChart3, User, Map, Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { Leaf } from 'lucide-react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Кнопка hamburger */}
      <motion.div 
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: 'pointer'}}
      >
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
      </motion.div>

      {/* Боковая панель */}
      <motion.div 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="sidebar-header">
          <h2><Leaf size={24} color="#2e7d32" /> Eco City</h2>
        </div>
       <nav className="sidebar-nav">
  <Link to="/" onClick={() => setIsOpen(false)}>
    <Home size={20} /> Главная
  </Link>
  <Link to="/pollution" onClick={() => setIsOpen(false)}>
    <BarChart3 size={20} /> Загрязнения
  </Link>
  <Link to="/account" onClick={() => setIsOpen(false)}>
    <User size={20} /> Аккаунт
  </Link>
  <Link to="/map" onClick={() => setIsOpen(false)}>
    <Map size={20} /> Карта
  </Link>
</nav>
      </motion.div>

      {/* Затемнение фона */}
      {isOpen && (
        <motion.div 
          className="sidebar-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;