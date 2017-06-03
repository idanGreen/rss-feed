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
            var filepath = $("#rss-filepath").val();
            if(filepath && filepath.length > 0 && filepath.indexOf(".xml", filepath.length -".xml".length) !== -1)
                view.parent.onSubmit(filepath);
            else
                alert("Invliad input - please enter an xml address");
        });
    };

    window.RegistrationView = RegistrationView;

})(jQuery);
