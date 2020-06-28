import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './components/About';
import Contacts from './components/Contacts';
import Experiences from './components/Experiences';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Navigation from './components/Navigation';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
    componentWillMount() {
        var loader = document.getElementById('loader-wrapper');
        loader.style.display = 'flex';
    }
    componentDidMount() {
        var loader = document.getElementById('loader-wrapper');
        loader.style.display = 'none';
    }
  render() {
      return (
          <Layout style={{ minHeight: '100vh' }}>
              <Router basename='/'>
                  <Header className="site-layout-background" style={{ padding: 0 }}>
                      <Navigation />
                  </Header>
                  <Content style={{ margin: '0 16px' }}>
                      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                          <Switch>
                              <Route path="/about">
                                  <About />
                              </Route>
                              <Route path="/contacts">
                                  <Contacts />
                              </Route>
                              <Route path="/experiences">
                                  <Experiences />
                              </Route>
                              <Route path="/">
                                  <About />
                              </Route>
                          </Switch>
                      </div>
                  </Content>
              </Router>
              <Footer style={{ textAlign: 'center' }}>portfolio ©2020 Created by dlthgud</Footer>
          </Layout>
      );
  }
}

export default App;
