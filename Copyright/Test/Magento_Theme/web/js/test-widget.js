define([
    'jquery'
], function ($) {
    $.widget('custom.test', {
        _create: function () {
            var el = this.element
            $(el).find(".buttonRead").on("click", function () {
                $(el).toggleClass("active");
            })
        }
    })
    return $.custom.test;
});
