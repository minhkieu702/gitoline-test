import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../App.css";

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="navigation" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <nav >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul style={{ display: 'flex', listStyleType: 'none' }}>
            <li><a className="active" href="#home" style={{ color: theme.color }}>Home</a></li>
            <li><a href="#news" style={{ color: theme.color }}>News</a></li>
            <li><a href="#about" style={{ color: theme.color }}>About</a></li>
            <li><a href="#contact" style={{ color: theme.color }}>Contact</a></li>
          </ul>
          <div>
            <a
              className="switch-mode"
              href="#"
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
              data-testid="toggle-theme-btn"
            >
              Switch Nav to {!dark ? "Dark" : "Light"} mode
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
