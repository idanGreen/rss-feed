(function($){
    var RssFeedView = function RssFeedView(parentCtrl){
        View.call(this, {
            parent: parentCtrl,
            element: $("#rss-feed-container"),
            templateId: "rssFeedTemplate"
        });
    };

    RssFeedView.prototype = Object.create(View.prototype);

    RssFeedView.prototype.afterRender = function afterRender(){
        this.element.find(".rss-feed-inner-container").slick({
            centerMode: true,
            infinite: true,
            variableWidth: true,
            appendArrows: $(".carousel-arrows"),
            prevArrow: "<button type='button' class='slick-prev'></button>",
            nextArrow: "<button type='button' class='slick-next'></button>"
        });
    };

    window.RssFeedView = RssFeedView;

})(jQuery);
