cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        ip: "https://game.zuiqiangyingyu.net/wb",
        version: "1.0.0",   
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        ctor();
    },

    // called every frame
    update: function (dt) {

    },

    ctor:function () {
        var url = "http://localhost:8080/index.html"
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    },
});
