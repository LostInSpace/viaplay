import { api, prefix } from "../config";

const localAddress = new RegExp(`^${api}${prefix}`);
const noTrailingSlash = /^(.*[^\/])\/?$/;

export default {
    getUrl(path = ''){
        return `${api}${prefix}${path}`.replace(noTrailingSlash, '$1');
    },

    getRedirectUrl(redirectPath = ''){
        return redirectPath.replace(prefix, '')
    },

    getLinkAddress(href = '') {
        return href.replace(localAddress, '');
    }
}

