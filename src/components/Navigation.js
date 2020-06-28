import React from 'react';

import { Link } from "react-router-dom";

import { Menu } from 'antd';
import { UserOutlined, ContactsOutlined, ProjectOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Navigation extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="user" icon={<UserOutlined />}>
          <Link to="/about">about Me</Link>
        </Menu.Item>
        <Menu.Item key="contacts" icon={<ContactsOutlined />}>
          <Link to="/contacts">CONTACTs</Link>
        </Menu.Item>
        <SubMenu icon={<ProjectOutlined />} title="experiences">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="experiences:1"><Link to="/experiences">Languages</Link></Menu.Item>
            <Menu.Item key="experiences:2"><Link to="/experiences">Option 2</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="experiences:3"><Link to="/experiences">projects</Link></Menu.Item>
            <Menu.Item key="experiences:4"><Link to="/experiences">organizations</Link></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" disabled>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

// ReactDOM.render(<App />, mountNode);
export default Navigation;