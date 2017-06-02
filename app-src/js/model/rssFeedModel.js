(function(){
    var RssFeedModel = function RssFeedModel(rssJson){
        this.data = rssJson.rss.channel;

        var items = this.data.item;

        // in case parser read only one item tag, wrap in an array
        if(!(items instanceof Array))
            this.data.item = [items];
    };

    RssFeedModel.prototype.getTitle = function getTitle(){
        return this.data.title;
    };

    RssFeedModel.prototype.getDescription = function getDescription(){
        return this.data.description;
    };

    RssFeedModel.prototype.getItems = function getItems(){
        return this.data.item;
    };

    window.RssFeedModel = RssFeedModel;

})();