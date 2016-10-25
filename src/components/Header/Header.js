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
import s from './Header.scss';
import Link from '../Link';
import TopLink from './TopLink';

class Header extends Component {
  static propTypes = {
    context: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
          <div className={s.logo}>
          <Link to="/">
            <img className={s.logoImage} src="/header-logo-large.png" alt="Viaplay" />
          </Link>
            </div>
          <div className={s.sections}>
            {this.props.context.data["_links"]["viaplay:sections"].map(section => <TopLink key={section.id} context={section} componentStyle={s.selection} />)}
          </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
