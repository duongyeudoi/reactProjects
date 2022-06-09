import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typhography, Space, Typography } from 'antd';
import './App.css';
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetail,
  News,
} from './components';
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage></Homepage>}></Route>
              <Route
                path="/exchanges"
                element={<Exchanges></Exchanges>}
              ></Route>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies></Cryptocurrencies>}
              ></Route>
              <Route
                path="/crypto/*"
                element={<CryptoDetail></CryptoDetail>}
              ></Route>
              <Route path="/news" element={<News></News>}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Crypto Verse <br />
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
