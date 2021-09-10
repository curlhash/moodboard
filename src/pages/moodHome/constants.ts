const EMOTIONS = {
    happy: {
        text: 'happy',
        color: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
    },
    loved: {
        text: 'loved',
        color: 'linear-gradient(to right top, #3d3438, #6e3549, #a02e4c, #d01d42, #fa0d28)'
    },
    excited: {
        text: 'excited',
        color: 'linear-gradient(to right top, #444d9c, #0083d3, #00b5d7, #00dfaa, #a4ff6b)'
    },
    sad: {
        text: 'sad',
        color: 'linear-gradient(to right top, #191a27, #25252f, #313138, #3e3d41, #4a4a4a)'
    },
    thankful: {
        text: 'thankful',
        color: 'linear-gradient(to right top, #22265d, #57256a, #891a69, #b30859, #d2203e)'
    },
    crazy: {
        text: 'crazy',
        color: 'linear-gradient(30deg, rgba(0,53,89,1) 0%, rgba(219,0,0,1) 100%)'
    },
    positive: {
        text: 'positive',
        color: 'linear-gradient(30deg, rgba(55,131,42,1) 0%, rgba(224,255,131,1) 100%)'
    },
    relaxed: {
        text: 'relaxed',
        color: 'linear-gradient(30deg, rgba(33,30,66,1) 0%, rgba(255,189,193,1) 100%)'
    },
    tired: {
        text: 'tired',
        color: 'linear-gradient(30deg, rgba(13,9,9,1) 0%, rgba(191,118,56,1) 100%)'
    },
}
const EMOTIONS_ARR = [EMOTIONS.crazy, EMOTIONS.excited, EMOTIONS.happy, EMOTIONS.loved, EMOTIONS.positive, EMOTIONS.relaxed, EMOTIONS.sad, EMOTIONS.thankful, EMOTIONS.tired]

export {
    EMOTIONS,
    EMOTIONS_ARR
}