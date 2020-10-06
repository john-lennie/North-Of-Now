document.addEventListener("DOMContentLoaded", () => {
  (function () {
    'use strict';

    // asign viewportWidth as viewport width
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var onText = false;

    // if width > 768, hide text after 5 seconds, show immediatedly on mousemove, then hide again after 10 seconds
    var hideText = function() {
      if (viewportWidth > 768) {
        var infoText = document.getElementById('short-form-project');
        var timeout;
        setTimeout(function() {
          infoText.classList.toggle("hidden");
        }, 5000);
        document.addEventListener('mousemove', e => {
          clearTimeout(timeout);
          infoText.addEventListener("mouseover", function(){
            onText = true;
          });
          infoText.addEventListener("mouseout", function(){
            onText = false;
          });
          if (infoText.classList.contains('hidden')) {
            infoText.classList.toggle("hidden");
          } else {
            if (!onText) {
              console.log("not on text");
              timeout = setTimeout(function() {
                infoText.classList.toggle("hidden");
              }, 5000);
            }
            if (onText) {
              console.log("on text");
            }
          }
        });
      }
    }

    hideText();

    // on resize redefine var viewportWidth to to new viewport size and call hideText function
    window.addEventListener('resize', function () {
      viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      hideText();
    }, false);

    // Does the browser actually support the video element?
    var supportsVideo = !!document.createElement('video').canPlayType;

    if (supportsVideo) {
      // Obtain handles to main elements
      var video = document.getElementById('video');
      var videoControls = document.getElementById('video-controls');

      // Display the user defined video controls
      videoControls.setAttribute('data-state', 'visible');

      var supportsProgress = (document.createElement('progress').max !== undefined);
      if (!supportsProgress) progress.setAttribute('data-state', 'fake');

      // Hide the default controls
      video.controls = false;

      // Display the user defined video controls
      videoControls.style.display = 'block';

      // Obtain handles to buttons and other elements
      var playpause = document.getElementById('playpause');
      var mute = document.getElementById('mute');
      var progress = document.getElementById('progress');
      var progressBar = document.getElementById('progress-bar');

      // Play/Pause and Mute State
      var changeButtonState = function(type) {
        // Play/Pause button
        if (type == 'playpause') {
          if (video.paused || video.ended) {
             playpause.setAttribute('data-state', 'play');
          }
          else {
             playpause.setAttribute('data-state', 'pause');
          }
        }
        // Mute button
        else if (type == 'mute') {
          mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
        }
      }

      // Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
      if (document.addEventListener) {
        // Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video
        video.addEventListener('loadedmetadata', function() {
          progress.setAttribute('max', video.duration);
        });

        // Add events for all buttons
        playpause.addEventListener('click', function(e) {
          if (video.paused || video.ended) video.play();
          else video.pause();
        });

        // The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
        video.addEventListener('play', function() {
           changeButtonState('playpause');
        }, false);
        video.addEventListener('pause', function() {
           changeButtonState('playpause');
        }, false);
        mute.addEventListener('click', function(e) {
           video.muted = !video.muted;
           changeButtonState('mute');
        });

        // As the video is playing, update the progress bar
        video.addEventListener('timeupdate', function() {
          // For mobile browsers, ensure that the progress element's max attribute is set
          if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
          progress.value = video.currentTime;
          progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
        });

        // React to the user clicking within the progress bar
        progress.addEventListener('click', function(e) {
          var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
          video.currentTime = pos * video.duration;
        });

      }
    }

  })();
});
