import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Detail, GiphyPage } from './pages'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GiphyPage} />
          <Route exact path="/details/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
