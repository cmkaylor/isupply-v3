import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider, Layout} from 'antd';
import Navigation from './components/Navigation';

const { Header, Content, Footer } = Layout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#00000' } }}>
    <Layout>
      <Header>
        <Navigation/>
      </Header>
      <Layout>
        <Content>
          <App/>
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
    </ConfigProvider>
  </React.StrictMode>
);
