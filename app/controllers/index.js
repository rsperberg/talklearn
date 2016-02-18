function goStart() {
    var starthere = Alloy.createController('start').getView();
    starthere.open();
    $.index.close();
}

$.index.open();

setTimeout(function() {
    goStart();
},1000);
