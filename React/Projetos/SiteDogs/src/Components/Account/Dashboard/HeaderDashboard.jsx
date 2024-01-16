import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderDashboard = ({ title }) => {
  const icons = useMemo(
    () => [
      { icon: 'fa-house', to: '/conta' },
      { icon: 'fa-chart-simple', to: '/conta/estatisticas' },
      { icon: 'fa-plus fa-lg', to: '/conta/postar' },
      { icon: 'fa-right-from-bracket', to: '/login' },
    ],
    [],
  );
  const [selectedIcon, setSelectionIcon] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIcon = icons.findIndex(
      (icon) => icon.to === location.pathname,
    );
    setSelectionIcon(currentIcon);
  }, [location, icons]);

  function handleIconClick(to, event) {
    event.preventDefault();
    navigate(to);
  }
  return (
    <section className="container">
      <div className="dashboardHeader">
        <h1 className="title">
          <span></span>
          {title}
        </h1>
        <nav className="dashboardIcons">
          {icons.map((item, index) => (
            <Link
              key={item.icon}
              to={item.to}
              onClick={(event) => handleIconClick(index, item.to, event)}
            >
              <span
                className={`${
                  selectedIcon === index ? 'dashboardIcon selected' : ''
                } `}
              >
                <i className={`fa-solid ${item.icon}`}></i>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeaderDashboard;
