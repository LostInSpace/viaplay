/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>Viaplay</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/store/nonstop-2014">Non Stop - 2014</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/film/the-hunger-games-mockingjay-part-2-2015">The Hunger Games - 2015</Link>
        </div>
      </div>
    );
  }

}

export default withStyles(Footer, s);
