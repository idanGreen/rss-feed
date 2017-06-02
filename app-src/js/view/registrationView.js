(function($){
    var RegistrationView = function RegistrationView(parentCtrl){
        View.call(this, {
            parent: parentCtrl,
            element: $("#registration-container"),
            templateId: "registrationTemplate"
        });
    };

    RegistrationView.prototype = Object.create(View.prototype);

    RegistrationView.prototype.afterRender = function afterRender(){
        var view = this;

        // handle submit button click event
        this.element.find("submitButton").click(function(e){
            view.parent.onSubmit(this.val());
        });
    };

    window.RegistrationView = RegistrationView;

})(jQuery);
