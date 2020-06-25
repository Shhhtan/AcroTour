$(document).ready(function () {
    $nav= $('.navbar');
    $toggleCollapse = $('.collapse');

    /**click event on toggle menu*/
    $toggleCollapse.click(function() {
    $nav.toggleClass('uncollapse');
    })

})