(function($){
    var View = function View(config){
        this.parent = config.parentCtrl;
        this.element = config.element;
        this.template = Handlebars.templates[config.templateId];
        this.model = null;
    };

    /**
     * Starts the view work flow - process template, render and call after render
     */
    View.prototype.start = function start(){

        var html;
        if(this.model !== null)
            html = this.template(this.model.data);
        else
            html = this.template();

        this.element.append(html);

        this.afterRender();
    };

    /**
     * Perform actions which require the view to have already been rendered
     */
    View.prototype.afterRender = function afterRender(){};

    RssFeedView.prototype.bindModel = function bindModel(modelTobind){
        this.model = modelTobind;
    };

    window.View = View;

})(jQuery);
