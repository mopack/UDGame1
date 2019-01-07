const i18n = require('LanguageData');
var Global = require("Global");

cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic: {
            type: cc.AudioClip,
            default: null,
        },
        buttonStart: cc.Button,
        buttonSettings: cc.Button,
        labelStart: cc.Label,
        lbaelSettings: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:
    onBtnStartClicked: function() {
        cc.director.loadScene('MagicForest');
    },
    
    onBtnSettingsClicked: function() {
        cc.director.loadScene('Settings');
    },

    onLoad () {
        if(Global.isFirstStart){
            Global.lang = 'en';
            Global.isFirstStart = false;
        }
    },

    start () {
        i18n.init(Global.lang);
        this.current = cc.audioEngine.play(this.bgMusic, true, 1);
    },

    // update (dt) {},
    update: function(){
        i18n.updateSceneRenderers();
    }
});

