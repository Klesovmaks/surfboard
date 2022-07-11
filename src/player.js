let player;
const playerContainer = $(".player");

let eventsInit = () => {
  $(".player__start").click((e) => {
    e.preventDefault();

    if(playerContainer.hasClass("paused")) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  $(".player__playback").click((e) => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX
    const newButtonPosition = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPosition;

    $(".player__playback-button").css({
      left: `${newButtonPosition}%`
    });

    player.seekTo(newPlaybackPositionSec);
  });

  $(".player__volume").click((e) => {
    const barV = $(e.currentTarget);
    const clickedPositionV = e.originalEvent.layerX
    const newButtonPositionV = (clickedPositionV / barV.width()) * 100;
    const newVolumePositionSec = (player.getVolume() / 100) * newButtonPositionV;

    $(".player__volume-button").css({
      left: `${newButtonPositionV}%`
    });
;
    player.setVolume(newButtonPositionV);
  });

  $(".player__splash").click(e => {
    player.playVideo();
  });

  $(".player__muted").click(e => {
    if(!player.isMuted()) {
      playerContainer.addClass("muted");
      player.mute();
    } else {
      playerContainer.removeClass("muted");
      player.unMute();
    }
    // !player.isMuted() ? player.mute() : player.unMute();
  });
};

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);
  const minutes = addZero(Math.floor(roundTime / 60));
  const seconds = addZero(roundTime - minutes * 60);

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return `${minutes} : ${seconds}`;
}

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();
  const volumePerc = player.getVolume();

  $(".player__duration-estinate").text(formatTime(durationSec));

  if(typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const volumePer = player.getVolume();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });

    $(".player__volume-button").css({
      left: `${volumePer}%`
    })
    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
}

const onPlayerStateChange = (event) => {
  switch (event.data) {
    case 1:
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      break;

    case 2:
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      break;
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'W7h-Yho8EB0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();