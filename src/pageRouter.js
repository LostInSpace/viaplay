import React from "react";
import Router from "react-routing/src/Router";
import Viaplay from "./components/Viaplay"
import Section from "./components/Section"
import Category from "./components/Category"
import Product from "./components/Product"
import Root from "./components/Root"


const pageRouter = new Router(on => {
    on('*', async (state, next) => {
        const component = await next();
        console.log(JSON.stringify(component));
        return <Viaplay context={state.context} component={component} />;
    });

    on('section', state => <Section context={state.context} />);
    on('category', state => <Category context={state.context}/>);
    on('product', state => <Product context={state.context}/>);
    on('root', state => <Root context={state.context}/>);
    // The same as for root
    on('error', state => <Root context={state.context}/>);
});

export default pageRouter;