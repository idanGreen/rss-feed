(function(){

    var AppCtrl = function AppCtrl(){
        this.regCtrl = new RegistrationCtrl(this);
        this.feedCtrl = new RssFeedCtrl(this);
    };

    AppCtrl.prototype.start = function start(){
        this.regCtrl.start();
    };

    AppCtrl.prototype.openFeed = function openFeed(filepath){
        this.feedCtrl.start(filepath);
    };

    window.AppCtrl = AppCtrl;
})();
