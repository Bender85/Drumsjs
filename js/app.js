/**
 * Created by nikit_000 on 22.04.2017.
 */
(function() {
    'use strict';
    console.log('ready');

    function playSound(e) {
        // console.log(e.keyCode);
        // const audio = document.querySelector('audio[data-key="'+ e.keyCode +'"]'); // old
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // es6
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        // console.log(audio);
        // console.log(key);
        if(!audio) return; // stop the function
        audio.currentTime = 0 // rewind to the start
        audio.play();
        key.classList.add('playing');
    }

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; // skip it is a not transform
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', playSound);
    // window.addEventListener("touchstart", playSound);
    // window.addEventListener("touchend", playSound);
    // window.addEventListener("touchcancel", playSound);
    // window.addEventListener("touchmove", playSound);

})();