import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';


const Pagina404 = () => (<div>Página 404</div>)


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact />
        <Route path="/Pages/Cadastro/Video" component={CadastroVideo} />
        <Route path="/Pages/Cadastro/Categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
