/* globals Em, $ */
CzHackathonPortal.ApplicationController = Em.Controller.extend({
    collapsed: true,

    successBarVisible: false,

    $viewport: $('body,html'),

    closeSuccessBar: function() {
        this.set('successBarVisible', false);
    },

    scrollTo: function(id) {
        this.get('$viewport').animate({
            scrollTop: $("#" + id).offset().top
        }, 600, "swing");
    },

    init: function() {
        var hash = window.location.hash;
        if (hash === '#registration-complete') {
            this.set('successBarVisible', true);
        }
    }
});
