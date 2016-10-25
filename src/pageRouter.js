import React from "react";
import Router from "react-routing/src/Router";
import fetch from "./core/fetch";
import {movieDbApiKey} from "./config";
import model from "./core/model";
import Viaplay from "./components/Viaplay";
import Section from "./components/Section";
import Category from "./components/Category";
import Product from "./components/Product";
import Root from "./components/Root";

const getTrailerData = async(state) => {
    let id = null;
    try {
        const imdbId = model.getContent(state.context.data)["imdb"]["id"];
        const query = `https://api.themoviedb.org/3/find/${imdbId}?api_key=${movieDbApiKey}&external_source=imdb_id`;
        const response = await fetch(query);
        const data = await response.json();
        id = data["movie_results"][0]["id"];
    } catch (ex) {
        console.log(ex);
    }

    if (id) {
        try {
            const query = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${movieDbApiKey}`;
            const response = await fetch(query);
            return await response.json();
        } catch (ex) {
            console.log(ex);
        }
    }
    return {};
};


const pageRouter = new Router(on => {
    on('*', async(state, next) => {
        const component = await next();
        return <Viaplay context={state.context} component={component}/>;
    });

    on('section', state => <Section context={state.context}/>);
    on('category', state => <Category context={state.context}/>);
    on('product', async state => {
        state.context.trailer = await getTrailerData(state);
        return <Product context={state.context}/>
    });
    on('*', state => <Root context={state.context}/>);
});

export default pageRouter;