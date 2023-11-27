import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttled = throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds)
}, 1000);

player.on('loaded', function () {
    // new version, to be tested | WTF
    let currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime != null) {
        player.setCurrentTime(+currentTime);
    } else {
        return;
    }
});

player.on('timeupdate', throttled);