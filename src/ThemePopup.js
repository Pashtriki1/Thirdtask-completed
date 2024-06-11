import React, { useState } from 'react';

const ThemePopup = ({ show, onClose, onAddTheme }) => {
  const [themeName, setThemeName] = useState('');
  const [themeColor, setThemeColor] = useState('');

  const handleAddTheme = () => {
    onAddTheme({ name: themeName, color: themeColor });
    setThemeName('');
    setThemeColor('');
    onClose();
  };

  if (!show) return null;

  return (
    <div style={styles.popupContainer}>
      <div style={styles.popup}>
        <h2>Add New Theme</h2>
        <input
          type="text"
          placeholder="Theme Name"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
        />
        <input
          type="color"
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
        />
        <button onClick={handleAddTheme}>Add Theme</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  popupContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default ThemePopup;
