import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Produtos from './Aulas/usestate/Produtos'
import Context from './Aulas/usecontext/App'
import Form from './Aulas/form/App'
import Input from './Aulas/input/App'
import Validacao from './Aulas/validacao/App'

const routes = [
  { path: '/produtos', component: Produtos },
  { path: '/context', component: Context },
  { path: '/form', component: Form },
  { path: '/input', component: Input },
  { path: '/validacao', component: Validacao },
]

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul style={{ display: 'flex', gap: 25, listStyle: 'none' }}>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.path}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} exact {...route} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}