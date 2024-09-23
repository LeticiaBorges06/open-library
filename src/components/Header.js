import React from 'react';
import './Header.css'; // Adicione o CSS para estilização

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="icon">📚</span> Open Library
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
