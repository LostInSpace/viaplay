/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from "react";
import Link from "../Link";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Product.scss";
import api from "../../core/api";
import model from "../../core/model";
import i18n from "../../core/i18n/i18n";

const addSeparator = (arr, separator) => {
    let result = arr.slice();
    for (let i = result.length - 1; i > 0; i--) {
        result.splice(i, 0, separator);
    }
    return result;
};

const getGenres = genres => {
    let results = genres.map(genre =>
        <Link className={s.mainDetailsGenre} key={genre.tagId}
              to={api.getLinkAddress(genre.href)}>{genre.title}</Link>);
    return addSeparator(results, "/");
};

const getPeople = people => {
    let results = people.map(one =>
        <Link className={s.people} key={one}
              to={`/search?query="${one}"`}>{one}</Link>);
    return addSeparator(results, ", ");
};

class Product extends Component {

    static propTypes = {
        context: PropTypes.object.isRequired,
    };

    renderTrailer = (data, props) => <div className={s.trailer} {...props} >{data && data.results && data.results[0] ?
        <iframe id="ytplayer" className={s.player} type="text/html"
                src={`http://www.youtube.com/embed/${data.results[0]["key"]}?autoplay=0`}
                frameborder="0"/> : ""}</div>;

    renderTitle = (data, props) => <div className={s.title} {...props} >{data["title"]}</div>;

    renderMainDetails = (data, props) =>
        <div className={s.mainDetails} {...props} >
            {getGenres(data["_links"]["viaplay:genres"])}
            <span className={s.mainDetailsSeparator}>&nbsp;</span>
            {data["content"]["production"]["year"]}
            <span className={s.mainDetailsSeparator}>&nbsp;</span>
            {data["content"]["duration"]["readable"]}
        </div>;

    renderIMDB = (data, props) => {
        const imdb = data["imdb"];
        return (
            <div className={s.imdb} {...props} >
                <a href={imdb["url"]} target="_blank">
                    <img className={s.imdbLogo} src="/imdb-logo.png" alt="IMDb"/>
                </a>
                <span className={s.imdbRating}>{imdb["rating"]}</span>
                <span className={s.imdbVotes}>{i18n.formatString('product.imdb.voters', imdb["votes"])}</span>
            </div>
        );
    };


    renderSynopsis = (data, props) => <div className={s.synopsis} {...props} >{data["synopsis"]}</div>;

    renderExtra = (data, props) => <div className={s.starring} {...props} >
        <div><span
            className={s.actors}>{i18n.getString('product.people.actors')}: </span>{getPeople(data["people"]["actors"])}
        </div>
        <div><span
            className={s.directors}>{i18n.getString('product.people.directors')}: </span>{getPeople(data["people"]["directors"])}
        </div>
        <div><span
            className={s.location}>{i18n.getString('product.location')}: </span>{data["production"]["country"]}
        </div>
    </div>;

    render() {
        const product = model.getProduct(this.props.context.data);
        const content = model.getContent(this.props.context.data);
        return (
            <div className={s.root}>
                <div className={s.container}>
                    {this.renderTrailer(this.props.context.trailer)}
                    <div className={s.info}>
                        {this.renderTitle(content)}
                        {this.renderMainDetails(product)}
                        {this.renderIMDB(content)}
                        {this.renderSynopsis(content)}
                        {this.renderExtra(content)}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(Product, s);
