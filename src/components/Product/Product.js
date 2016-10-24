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
import s from './Product.scss';

class Product extends Component {

  static propTypes = {
    context: PropTypes.object.isRequired,
  };

  renderTrailer = (data, props) => <div className={s.trailer} {...props} >Trailer</div>;

  renderTitle = (data, props) => <div className={s.title} {...props} >{data.title}</div>;

  renderMainDetails = (data, props) => <div className={s.mainDetails} {...props} >Main Details</div>;

  renderIMDB = (data, props) => <div className={s.mainDetails} {...props} >IMDB</div>;

  renderDescription = (data, props) => <div className={s.description} {...props} >Description</div>;

  renderStaring = (data, props) => <div className={s.staring} {...props} >Staring</div>;

  render() {
    const data = this.props.context.data["_embedded"]["viaplay:blocks"][0]["_embedded"]["viaplay:product"]["content"];
    console.log(JSON.stringify(data));
        return (
      <div className={s.root}>
        <div className={s.container}>
          {this.renderTrailer()}
          <div className={s.info}>
            {this.renderTitle(data)}
            {this.renderMainDetails()}
            {this.renderIMDB()}
            {this.renderDescription()}
            {this.renderStaring()}
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Product, s);
