import React from 'react';
import './App.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { BrowserRouter, Route } from 'react-router-dom';
import { SideBar } from './components/sidebar/sidebar';
import { Menu } from './components/menu/menu';
import { Content } from './components/content/content';
import { Dialog } from './components/dialog/dialog';
import { Profile } from './components/profile/profile';

function App() {

    return (
      <BrowserRouter>
          <Header />
          <Main>
              <SideBar>
                  <Menu />
              </SideBar>
              <Content>
                  <Route path='/dialog' render={() => <Dialog />} />
                  <Route path='/profile' render={() => <Profile />} />
              </Content>
          </Main>
      </BrowserRouter>
    );
}

export default App;
