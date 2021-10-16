import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Detail, GiphyPage } from './pages'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GiphyPage} />
          <Route exact path="/details/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
