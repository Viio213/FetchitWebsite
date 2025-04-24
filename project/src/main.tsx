import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import Cookies from 'js-cookie';
import App from './App.tsx';
import './index.css';

// Only initialize analytics if consent is given
const analyticsEnabled = Cookies.get('analytics-enabled') === 'true';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      {analyticsEnabled && <Analytics />}
    </HelmetProvider>
  </StrictMode>
);