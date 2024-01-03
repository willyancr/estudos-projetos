import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderDashboard = ({ title }) => {
  const icons = useMemo(
    () => [
      { icon: 'fa-house', to: '/conta' },
      { icon: 'fa-chart-simple', to: '/conta/estatisticas' },
      { icon: 'fa-plus fa-lg', to: '/conta' },
      { icon: 'fa-right-from-bracket', to: '/conta' },
    ],
    [],
  );
  const [selectedIcon, setSelectionIcon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedIcon !== null) {
      navigate(icons[selectedIcon].to);
    }
  }, [selectedIcon, icons, navigate]);

  const handleIconClick = useCallback(
    (index, event) => {
      event.preventDefault();
      setSelectionIcon(index);
    },
    [setSelectionIcon, navigate],
  );

  return (
    <section className="dashboard container">
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
              onClick={(event) => {
                if (selectedIcon === index) {
                  navigate(item.to);
                } else {
                  handleIconClick(index, event);
                }
              }}
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
