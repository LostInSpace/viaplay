/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Root.scss';

class Root extends Component {

  static propTypes = {
    context: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.context.data.title}</h1>
          <h2>{this.props.context.data.description}</h2>
        </div>
      </div>
    );
  }

}

export default withStyles(Root, s);
