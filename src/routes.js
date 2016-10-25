/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import Router from "react-routing/src/Router";
import pageRouter from "./pageRouter";
import fetch from "./core/fetch";
import api from "./core/api";

const router = new Router(on => {
    on('*', async state => {
        let path = state.path;
        const query = api.getUrl(path);
        const response = await fetch(query);
        const data = await response.json();

        if (data && data.responseCode && data.responseCode.httpStatus === 200) {
            state.context.data = data;
            let pageState = {
                path: data.pageType || 'root',
                context: state.context
            };
            let pageComponent;
            await pageRouter.dispatch(pageState,  (state, component) => {
                pageComponent = component;
            });
            return pageComponent;
        } else {
            let redirectComponent;
            state.path = api.getRedirectUrl(data.redirectPath);
            await router.dispatch(state,  (state, component) => {
                redirectComponent = component;
            });
            return redirectComponent;
        }
    });
});

export default router;