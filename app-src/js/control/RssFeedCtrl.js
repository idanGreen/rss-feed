(function(){
    var RssFeedCtrl = function RssFeedCtrl(){
        this.rssFileParser = new RssXmlParser();
        this.view = new RssFeedView(this);
    };

    RssFeedCtrl.prototype.start = function start(rssFilepath){
        this.rssFileParser.parseFromFile(rssFilepath, this.startFeedFlow.bind(this))
    };

    RssFeedCtrl.prototype.startFeedFlow = function startFeedFlow(rssFeedJson){
        var rssFeedModel = new RssFeedModel(rssFeedJson);
        this.view.bindModel(rssFeedModel);
        this.view.start();
    };

    window.RssFeedCtrl = RssFeedCtrl;

})();
