export default {
    getProduct(data) {
        try {
            return data["_embedded"]["viaplay:blocks"][0]["_embedded"]["viaplay:product"];
        } catch (npe) {
            return {};
        }
    },
    getContent(data) {
        return this.getProduct(data)["content"];
    }
}