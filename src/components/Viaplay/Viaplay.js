/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from "react";
import emptyFunction from "fbjs/lib/emptyFunction";
import s from "./Viaplay.scss";
import Header from "../Header";
import Footer from "../Footer";

class Viaplay extends Component {

    static propTypes = {
        context: PropTypes.object,
        component: PropTypes.element.isRequired
    };

    static childContextTypes = {
        insertCss: PropTypes.func.isRequired,
        onSetTitle: PropTypes.func.isRequired,
        onSetMeta: PropTypes.func.isRequired,
        onPageNotFound: PropTypes.func.isRequired,
    };

    getChildContext() {
        const context = this.props.context;
        return {
            insertCss: context.insertCss || emptyFunction,
            onSetTitle: context.onSetTitle || emptyFunction,
            onSetMeta: context.onSetMeta || emptyFunction,
            onPageNotFound: context.onPageNotFound || emptyFunction,
        };
    }

    componentWillMount() {
        const {insertCss} = this.props.context;
        this.removeCss = insertCss(s);
    }

    componentWillUnmount() {
        this.removeCss();
    }

    render() {
        this.props.context.onSetTitle(this.props.context.data.title);
        return (
            <div className={s.root}>
                <Header className={s.header} context={this.props.context} />
                <div className={s.content}>
                    {this.props.component}
                </div>
                <Footer className={s.footer} context={this.props.context} />
            </div>);
    }
}

export default Viaplay;
