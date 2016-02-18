var args = arguments[0] || {};

/**
 * SKIP click
 */
function skipHome() {
//    Ti.API.info('onClick happened');
    var hometabgroup = Alloy.createController('home').getView();
    hometabgroup.open();
    $.starthere.close();
}
