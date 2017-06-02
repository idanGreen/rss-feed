(function(){

    var STR_FILEPATH = "filepath";

    var RegistrationCtrl = function RegistrationCtrl(parentCtrl){
        this.parent = parentCtrl;
        this.view = new RegistrationView(this);
    };

    RegistrationCtrl.prototype.start = function start(){
        // if this isn't the first time the user entered a filepath, open the feed
        var filepath = localStorage.getItem(STR_FILEPATH);
        if(typeof filepath !== 'undefined' && filepath !== null && filepath.length > 0)
            this.parent.openFeed(filepath);
        // otherwise, open registration form
        else
            this.view.start();
    };

    RegistrationCtrl.prototype.onSubmit = function onSubmit(filepath){
        localStorage.setItem(STR_FILEPATH, filepath);
        this.parent.openFeed(filepath);
    };


    window.RegistrationCtrl = RegistrationCtrl;
})();
