import React from 'react';
import { Button, Menu, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined></HomeOutlined>}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined></FundOutlined>}>
          <Link to="/cryptocurrencies">cryptocurrency</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined></BulbOutlined>}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
