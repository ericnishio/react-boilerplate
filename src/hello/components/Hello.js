// @flow

import flow from 'lodash/flow'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sayHello} from '../actions'
import {helloSelector} from '../selectors'
import Title from './Title'
import css from './Hello.css'

type HelloProps = {
  /** A message that is displayed to the user. */
  message: string,
  /** A function that is invoked when the component will be mounted. */
  sayHello: typeof sayHello
}

/** A component that displays a friendly message to the user. */
export class Hello extends Component {
  props: HelloProps

  static defaultProps = {
    message: 'Hello from React.',
  }

  componentWillMount() {
    this.props.sayHello()
  }

  render() {
    const {message} = this.props

    return (
      <div className={css.component}>
        <Title>{message}</Title>
      </div>
    )
  }
}

export default flow(
  connect(helloSelector, {sayHello})
)(Hello)
