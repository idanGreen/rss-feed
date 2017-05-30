(function(){
    var RssFeedModel = function RssFeedModel(rssJson){
        this.data = rssJson.channel;
    };

    RssFeedModel.prototype.getTitle = function getTitle(){
        return this.data.title;
    };

    RssFeedModel.prototype.getDescription = function getDescription(){
        return this.data.description;
    };

    RssFeedModel.prototype.getItems = function getItems(){
        var items = this.data.item;

        // in case parser read only one item tag, wrap in an array
        if(!(items instanceof Array))
            return [items];
        else
            return items;
    };

    window.RssFeedModel = RssFeedModel;

})();