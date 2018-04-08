import React, { Component, Fragment } from 'react';
import Nav from './Nav'
import { injectGlobal} from 'styled-components';

injectGlobal`
     body{
          margin: 0;
          padding: 0;
        }
`

export default class App extends Component {
  render() {
    return (
        <Fragment>
      <Nav />
      <h1>test</h1>
      </Fragment>
    );
  }
}
