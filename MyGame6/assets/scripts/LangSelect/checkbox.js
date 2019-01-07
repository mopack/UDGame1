const i18n = require('LanguageData');

cc.Class({
    extends: cc.Component,

    properties: {
        title: cc.Label,
        buttonOKLabel: cc.Label,
        radioButtonEventString: cc.Label,

        radioButton: {
            default: [],
            type: cc.Toggle
        },
    },

    // use this for initialization
    onLoad: function () {
        i18n.init('en');
    },

    radioButtonClicked: function(toggle) { //by ISO 639
        var index = this.radioButton.indexOf(toggle);
        switch(index){
            case 0: 
                i18n.init('en');
                break;
            case 1: 
                i18n.init('zh_tw'); 
                break;
            case 2: 
                i18n.init('zh'); 
                break;
        }
        this.title.string = i18n.t('label.pleaseSelectLang');
        this.buttonOKLabel.string = i18n.t('label.apply');
    },
});
