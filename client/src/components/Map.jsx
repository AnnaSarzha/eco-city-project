import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { 
  Cloud, 
  Droplet, 
  Trash2, 
  Volume2, 
  Lightbulb, 
  Sprout,
  Filter,
  Plus
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Исправление иконок для Leaflet
import L from 'leaflet';
// Функция для создания цветной иконки
const createColoredIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 30px;
      height: 30px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pollutionPoints = [
  {
    id: 1,
    type: 'air',
    coords: [55.7558, 37.6173], // Центр (Кремль)
    title: 'Загрязнение воздуха в центре',
    description: 'Выхлопные газы',
    address: 'Тверская ул.'
  },
  {
    id: 2,
    type: 'air',
    coords: [55.7089, 37.6056], // Юг (Чертаново)
    title: 'Промышленные выбросы',
    description: 'Заводские выбросы',
    address: 'Варшавское шоссе'
  },
  {
    id: 3,
    type: 'water',
    coords: [55.7495, 37.6395], // Москва-река
    title: 'Загрязнение Москвы-реки',
    description: 'Сточные воды',
    address: 'Набережная Тараса Шевченко'
  },
  {
    id: 4,
    type: 'water',
    coords: [55.8231, 37.6456], // Север (Алтуфьево)
    title: 'Загрязнение водоёма',
    description: 'Мусор в воде',
    address: 'Алтуфьевское шоссе'
  },
  {
    id: 5,
    type: 'waste',
    coords: [55.8431, 37.5155], // Север-Запад (Митино)
    title: 'Несанкционированная свалка',
    description: 'Строительный мусор',
    address: 'Пятницкое шоссе'
  },
  {
    id: 6,
    type: 'waste',
    coords: [55.6558, 37.6178], // Юг (Бутово)
    title: 'Переполненные контейнеры',
    description: 'Отходы не вывозятся',
    address: 'ул. Адмирала Лазарева'
  },
  {
    id: 7,
    type: 'noise',
    coords: [55.7297, 37.6056], // Юго-Запад
    title: 'Шум от магистрали',
    description: 'Превышение нормы шума',
    address: 'Варшавское шоссе'
  },
  {
    id: 8,
    type: 'noise',
    coords: [55.7887, 37.7456], // Восток (Измайлово)
    title: 'Стройка ночью',
    description: 'Работают после 23:00',
    address: 'Щёлковское шоссе'
  },
  {
    id: 9,
    type: 'light',
    coords: [55.7602, 37.6186], // Красная площадь
    title: 'Световое загрязнение',
    description: 'Яркая реклама',
    address: 'Манежная площадь'
  },
  {
    id: 10,
    type: 'light',
    coords: [55.7961, 37.7125], // Северо-Восток
    title: 'Избыточное освещение',
    description: 'Фонари не выключаются',
    address: 'проспект Мира'
  },
  {
    id: 11,
    type: 'soil',
    coords: [55.7887, 37.6456], // Восток
    title: 'Загрязнение почвы',
    description: 'Разлив нефтепродуктов',
    address: 'ул. Электрозаводская'
  },
  {
    id: 12,
    type: 'soil',
    coords: [55.6758, 37.5508], // Юго-Запад
    title: 'Химическое загрязнение',
    description: 'Тяжёлые металлы',
    address: 'ул. Академика Королёва'
  }
];

  const filters = [
    { id: 'all', label: 'Все', icon: Filter, color: '#2e7d32' },
    { id: 'air', label: 'Воздух', icon: Cloud, color: '#2d6a4f' },
    { id: 'water', label: 'Вода', icon: Droplet, color: '#40916c' },
    { id: 'waste', label: 'Отходы', icon: Trash2, color: '#52b788' },
    { id: 'noise', label: 'Шум', icon: Volume2, color: '#74c69d' },
    { id: 'light', label: 'Свет', icon: Lightbulb, color: '#95d5b2' },
    { id: 'soil', label: 'Почва', icon: Sprout, color: '#1b4332' }
  ];

  const filteredPoints = selectedFilter === 'all' 
    ? pollutionPoints 
    : pollutionPoints.filter(p => p.type === selectedFilter);

  const getIconColor = (type) => {
    const colors = {
      air: '#2d6a4f',
      water: '#40916c',
      waste: '#52b788',
      noise: '#74c69d',
      light: '#95d5b2',
      soil: '#1b4332'
    };
    return colors[type] || '#2e7d32';
  };

  return (
    <div className="map-page">
      <section className="map-header">
        <h1>Карта загрязнений</h1>
        <p>Интерактивная карта экологических проблем города</p>
      </section>

      <section className="map-filters">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.id)}
                style={{ 
                  borderColor: filter.color,
                  backgroundColor: selectedFilter === filter.id ? filter.color : 'white'
                }}
              >
                <filter.icon size={18} color={selectedFilter === filter.id ? 'white' : filter.color} />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="map-container">
        <MapContainer
          center={[55.7558, 37.6173]}
          zoom={10}
          scrollWheelZoom={true}
          attributionControl={false}
          style={{ height: '600px', width: '100%', borderRadius: '20px' }}
        >
          <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>
          {filteredPoints.map((point) => (
  <Marker 
    key={point.id} 
    position={point.coords}
    icon={createColoredIcon(getIconColor(point.type))}
  >
    <Popup>
      <strong>{point.title}</strong><br />
      {point.address}<br />
      {point.description}
    </Popup>
  </Marker>
))}
        </MapContainer>
      </section>

      <section className="map-legend">
        <div className="container">
          <h2>Условные обозначения</h2>
          <div className="legend-grid">
            {filters.filter(f => f.id !== 'all').map((filter) => (
              <div key={filter.id} className="legend-item">
                <div className="legend-marker" style={{ backgroundColor: filter.color }}></div>
                <span>{filter.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-stats">
        <div className="container">
          <h2>Статистика по районам</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>6</h3>
              <p>Активных точек</p>
            </div>
            <div className="stat-box">
              <h3>3</h3>
              <p>Района охвачено</p>
            </div>
            <div className="stat-box">
              <h3>12</h3>
              <p>Решено проблем</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Мониторинг</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-add">
        <div className="container">
          <button className="add-point-btn">
            <Plus size={24} />
            Сообщить о проблеме
          </button>
        </div>
      </section>
    </div>
  );
}


export default MapPage;
<section className="map-attribution">
  <p>
    Карта: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
  </p>
</section>