cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic: {
            type: cc.AudioClip,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.current = cc.audioEngine.play(this.bgMusic, true, 1);
    },

    // update (dt) {},
});
