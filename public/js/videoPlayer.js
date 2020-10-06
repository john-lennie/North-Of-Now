document.addEventListener("DOMContentLoaded", () => {
  (function () {
    'use strict';

    // get viewport width
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // if width > 768, hide text after 5 seconds, show immediatedly on mousemove, then hide again after 10 seconds
    if (viewportWidth > 768) {
      var infoText = document.getElementById('short-form-project');
      var timeout;

      setTimeout(function() {
        infoText.classList.toggle("hidden");
      }, 5000);

      document.addEventListener('mousemove', e => {
        clearTimeout(timeout);
        // if hidden show right away, when visible hide after x seconds
        if (infoText.classList.contains('hidden')) {
          infoText.classList.toggle("hidden");
        } else {
          timeout = setTimeout(function(){
            infoText.classList.toggle("hidden");
          }, 10000);
        }
      });
    }

    window.addEventListener('resize', function () {
      viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      if (viewportWidth > 768) {
        var infoText = document.getElementById('short-form-project');
        var timeout;

        setTimeout(function(){
          infoText.classList.toggle("hidden");
        }, 5000);

        document.addEventListener('mousemove', e => {
          clearTimeout(timeout);
          // if hidden show right away, when visible hide after x seconds
          if (infoText.classList.contains('hidden')) {
            infoText.classList.toggle("hidden");
          } else {
            timeout = setTimeout(function(){
              infoText.classList.toggle("hidden");
            }, 10000);
          }
        });
      }
    }, false);

    // Does the browser actually support the video element?
    var supportsVideo = !!document.createElement('video').canPlayType;

    if (supportsVideo) {
    	// Obtain handles to main elements
    	var videoContainer = document.getElementById('videoContainer');
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
     	var fullscreen = document.getElementById('fs');

      // Check if the browser supports the Fullscreen API
      var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
      // If the browser doesn't support the Fulscreen API then hide the fullscreen button
      if (!fullScreenEnabled) {
        fullscreen.style.display = 'none';
      }

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

     	// // Change the volume
      // var checkVolume = function(dir) {
      //    if (dir) {
      //       var currentVolume = Math.floor(video.volume * 10) / 10;
      //       if (dir === '+') {
      //          if (currentVolume < 1) video.volume += 0.1;
      //       }
      //       else if (dir === '-') {
      //          if (currentVolume > 0) video.volume -= 0.1;
      //       }
      //       // If the volume has been turned off, also set it as muted
      //       // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
      //       if (currentVolume <= 0) video.muted = true;
      //       else video.muted = false;
      //    }
      //    changeButtonState('mute');
      // }
      // var alterVolume = function(dir) {
      //    checkVolume(dir);
      // }

     	// Set the video container's fullscreen state
    	var setFullscreenData = function(state) {
    		videoContainer.setAttribute('data-fullscreen', !!state);
    	}

    	// Checks if the document is currently in fullscreen mode
     	var isFullScreen = function() {
     		return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
     	}

     	// Fullscreen
     	var handleFullscreen = function() {
     		// If fullscreen mode is active...
      		if (isFullScreen()) {
      			// ...exit fullscreen mode
      			// (Note: this can only be called on document)
      			if (document.exitFullscreen) document.exitFullscreen();
      			else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      			else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      			else if (document.msExitFullscreen) document.msExitFullscreen();
      			setFullscreenData(false);
      		}
      		else {
      		  // ...otherwise enter fullscreen mode
      			// (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
            if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      		  else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
      		  else if (videoContainer.webkitRequestFullScreen) {
      				// Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
              // ensures that our custom controls are visible:
              // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
              // figure[data-fullscreen=true] .controls { z-index:2147483647; }
      				video.webkitRequestFullScreen();
      			}
      			else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
      			setFullscreenData(true);
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
        // stop.addEventListener('click', function(e) {
        //    video.pause();
        //    video.currentTime = 0;
        //    progress.value = 0;
        //    // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
        //    changeButtonState('playpause');
        // });
        mute.addEventListener('click', function(e) {
           video.muted = !video.muted;
           changeButtonState('mute');
        });
     		fs.addEventListener('click', function(e) {
     			handleFullscreen();
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

     		// Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
     		document.addEventListener('fullscreenchange', function(e) {
     			setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
     		});
     		document.addEventListener('webkitfullscreenchange', function() {
     			setFullscreenData(!!document.webkitIsFullScreen);
     		});
     		document.addEventListener('mozfullscreenchange', function() {
     			setFullscreenData(!!document.mozFullScreen);
     		});
     		document.addEventListener('msfullscreenchange', function() {
     			setFullscreenData(!!document.msFullscreenElement);
     		});
     	}
    }

  })();
});
