import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const vimeoPlayer = new Player('vimeo-player');
vimeoPlayer.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
    vimeoPlayer.setCurrentTime(savedTime).then(() => {
        console.log('Playback resumed from saved time.');
    }).catch((error) => {
        console.error('Error setting current time:', error);
    });
}



