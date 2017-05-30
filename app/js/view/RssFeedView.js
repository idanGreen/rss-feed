(function($){
    var RssFeedView = function RssFeedView(parentCtrl){
        this.parent = parentCtrl;
        this.element = $("#rssFeedContainer");
        this.template = Handlebars.templates["rssFeedTemplate"];
    };

    RssFeedView.prototype.start = function start(){
        var html = this.template(this.model);
        this.element.append(html);
    };

    RssFeedView.prototype.bindModel = function bindModel(modelTobind){
        this.model = modelTobind;
    };

    window.RssFeedView = RssFeedView;

})(jQuery);
