import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Produtos from './Aulas/usestate/Produtos'
import Context from './Aulas/usecontext/App'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/context">Context</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/context">
            <Context />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}