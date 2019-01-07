cc.Class({
    extends: cc.Component,

    properties: {
        radioButtonEventString: {
            default: null,
            type: cc.Label
        },

        radioButton: {
            default: [],
            type: cc.Toggle
        },

        index: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.radioButtonEventString.string =  "RadioButton " + this.index + " is checked.";
    },

    radioButtonClicked: function(toggle) {
        this.index = this.radioButton.indexOf(toggle);
        this.radioButtonEventString.string =  "RadioButton " + this.index + " is checked.";
    },
});
