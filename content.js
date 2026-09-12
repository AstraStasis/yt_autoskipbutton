function skipAd() {
    const video = document.querySelector('video');
    const isAdPlaying = document.querySelector('.ad-showing, .ad-interrupting');
    

    if (video && isAdPlaying) {
        if (isFinite(video.duration)) {
            video.currentTime = video.duration - 0.1;
            console.log("Auto-Skipper: Ad fast-forwarded!");
        }
    }
}


setInterval(skipAd, 500);


// test