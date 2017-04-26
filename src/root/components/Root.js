// @flow

import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hello from '../../hello/components/Hello'
import css from './Root.css'

export type RootProps = {
  /** The Redux store. */
  store: Object,
}

/** The root component of the application. */
const Root = ({store}: RootProps) => (
  <div className={css.component}>
    <Provider store={store}>
      <Router>
        <div className={css.routes}>
          <Route exact path="/" component={Hello}/>
        </div>
      </Router>
    </Provider>
  </div>
)

export default Root
