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
import s from './TopLink.scss';
import Link from '../../Link';
import api from '../../../core/api'

class TopLink extends Component {

  static propTypes = {
    context: PropTypes.object.isRequired,
    componentStyle: PropTypes.string
  };

  render() {
    const item = this.props.context;
    const style = this.props.componentStyle;
    return (
      <Link className={style} data-active={!!item.active} to={api.getLinkAddress(item.href)}>
        {item.title}
      </Link>

    );
  }

}


export default withStyles(TopLink, s);
