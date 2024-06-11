import React, { useState } from 'react';
import ThemePopup from './ThemePopup';

const App = () => {
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleAddTheme = (theme) => {
    setThemes([...themes, theme]);
  };

  const handleApplyTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <div style={{ ...styles.container, backgroundColor: currentTheme.color || '#fff' }}>
      <h1>Theme Manager</h1>
      <button onClick={() => setShowPopup(true)}>Add Theme</button>
      <div style={styles.themeList}>
        {themes.map((theme, index) => (
          <div key={index} style={{ ...styles.themeItem, backgroundColor: theme.color }}>
            <span>{theme.name}</span>
            <button onClick={() => handleApplyTheme(theme)}>Apply</button>
          </div>
        ))}
      </div>
      <ThemePopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onAddTheme={handleAddTheme}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  themeList: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  themeItem: {
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};

export default App;
