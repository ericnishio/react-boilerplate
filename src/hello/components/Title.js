// @flow

import React from 'react'
import css from './Title.css'
import type {ReactChildren} from 'react-flow-types'

type Props = {
  /** The title text. */
  children?: ReactChildren
}

/** A component that renders a title text. */
const Title = ({children}: Props) => (
  <h1 className={css.component}>{children}</h1>
)

export default Title
