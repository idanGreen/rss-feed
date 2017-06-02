(function($){
    var RssFeedView = function RssFeedView(parentCtrl){
        this.parent = parentCtrl;
        this.element = $("#rss-feed-container");
        this.template = Handlebars.templates["rssFeedTemplate"];
    };

    RssFeedView.prototype.start = function start(){
        var html = this.template(this.model.data);
        this.element.append(html);

        this.element.find(".rss-feed-inner-container").slick({
            centerMode: true,
            infinite: true,
            variableWidth: true
        });
    };

    RssFeedView.prototype.bindModel = function bindModel(modelTobind){
        this.model = modelTobind;
    };

    window.RssFeedView = RssFeedView;

})(jQuery);
