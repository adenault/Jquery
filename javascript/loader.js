 var javascripts = {
     "browser.min.js": true,
     "konami.min.js": true,
     "sounds.min.js": true,
     "mobile.min.js": true,
     "popup.min.js": true,
     "scroller.min.js": false,
     "slidecontrainer.min.js": false,
     "clipboard.min.js": true,
     "pagin.min.js": true,
     "login.min.js": true
 };

 var retrieveURL = function(filename) {
    var scripts = document.getElementsByTagName('script');
    if (scripts && scripts.length > 0) {
        for (var i in scripts) {
            if (scripts[i].src && scripts[i].src.match(new RegExp(filename+'\\.js$'))) {
                return scripts[i].src.replace(new RegExp('(.*)'+filename+'\\.js$'), '$1');
            }
        }
    }
};

var dir = retrieveURL('loader');

 $.each(javascripts, function (url, value) {
     if (value) {
         $.getScript(dir  + url, function () {
             console.log("Loaded: " + url);
         });
     }
 });