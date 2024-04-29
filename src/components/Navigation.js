import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'About',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Products',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        label: (
          <a href="https://www.gardspecialists.com/" target="_blank" rel="noopener noreferrer">
          GARD Specialists Co Inc.
          </a>
        ),
        key: 'setting:1',
      },
      {
        label: 'Quarterly Catalog',
        key: 'setting:2',
      },
    ],
  },
  {
    label: 'Services',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
];
const Navigation = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu style={{ position: 'relative', display: 'flex', justifyContent: 'center'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;