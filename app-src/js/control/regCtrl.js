(function(){

    var STR_FILEPATH = "filepath";

    var RegistrationCtrl = function RegistrationCtrl(parentCtrl){
        this.parent = parentCtrl;
        this.view = new RegistrationView(this);
        this.filepath = "";
        this.isOpen = false;
    };

    RegistrationCtrl.prototype.start = function start(){
        // if this isn't the first time the user entered a filepath, open the feed
        this.getFilePath();
        if(typeof this.filepath !== 'undefined' && this.filepath !== null && this.filepath.length > 0)
            this.switchToFeed();
        // otherwise, open registration form
        else {
            this.view.start();
            this.isOpen = true;
        }
    };

    RegistrationCtrl.prototype.onSubmit = function onSubmit(filepath){
        this.setFilePath(filepath);
        this.switchToFeed();
    };

    RegistrationCtrl.prototype.switchToFeed = function switchToFeed(){
        if(this.isOpen)
            this.view.stop();
        this.parent.openFeed(this.filepath);
    };

    RegistrationCtrl.prototype.getFilePath = function getFilePath(){
        if(typeof localStorage !== 'undefined')
            this.filepath = localStorage.getItem(STR_FILEPATH);
        else{
            this.filepath = getCookie(STR_FILEPATH);
        }
    };

    RegistrationCtrl.prototype.setFilePath = function setFilePath(filepath){
        this.filepath = filepath;
        if(typeof localStorage !== 'undefined')
            localStorage.setItem(STR_FILEPATH, this.filepath);
        else{
            setCookie(STR_FILEPATH, this.filepath, {expires: 1});
        }
    };


    window.RegistrationCtrl = RegistrationCtrl;
})();
