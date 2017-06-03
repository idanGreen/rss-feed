(function($){
    var RegistrationView = function RegistrationView(parentCtrl){
        View.call(this, {
            parentCtrl: parentCtrl,
            element: $("#registration-container"),
            templateId: "registrationTemplate"
        });
    };

    RegistrationView.prototype = Object.create(View.prototype);

    RegistrationView.prototype.afterRender = function afterRender(){
        var view = this;

        // handle submit button click event
        this.element.find("#submit-button").click(function(e){
            view.parent.onSubmit($("#rss-filepath").val());
        });
    };

    window.RegistrationView = RegistrationView;

})(jQuery);
