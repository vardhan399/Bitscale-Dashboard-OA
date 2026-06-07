import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { GridProvider } from './context/GridContext';
import { ToastProvider } from './context/ToastContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GridProvider>
        <ToastProvider>
          <CommandPaletteProvider>
            <App />
          </CommandPaletteProvider>
        </ToastProvider>
      </GridProvider>
    </ThemeProvider>
  </React.StrictMode>
);
