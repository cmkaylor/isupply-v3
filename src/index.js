import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider} from 'antd';
import HeaderContent from './components/HeaderContent';
import FooterContent from './components/FooterContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#34495E' } }}>
      <HeaderContent/>
      <App/>
      <FooterContent/>
    </ConfigProvider>
  </React.StrictMode>
);
