import css from 'styled-jsx/css'

export const videoPlayerStyles = css.global`
figure#videoContainer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
}
figcaption {
	display:block;
	font-size:16px;
	font-size:1rem;
}
video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

/* controls */
.controls, .controls li {
	padding:0;
	margin:0;
}
.controls {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: none;
    list-style-type: none;
    overflow: hidden;
    background: transparent;
    border-top: 1px solid #ffffff1a;
    backdrop-filter: blur(5px) brightness(100%);
}
.controls li {
	float:left;
	width:10%;
	margin-left:0.3%;
}
.controls li:first-child {
	margin-left:0;
}
.controls .button {
  display: inline-block;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  color: #fff;
  background: none;
  border: none;
  padding: 0;
  font-size: 12px;
  font-family: inherit;
  margin-bottom: 10px;
}
.controls .floatR .button {
  margin-left: 10px;
}
.controls button:hover, .controls button:focus {
}
.controls button[data-state="play"] {
}

.controls button[data-state="pause"] {
}
.controls[data-state=hidden] {
   display:none;
}

.controls[data-state=visible] {
   display:block;
}
.controls .progress {
	width: 100%;
	cursor:pointer;
}
.controls progress {
   display:block;
   width:100%;
   height:3px;
   margin-top:0.125rem;
   border:none;
   -moz-border-radius:2px;
   -webkit-border-radius:2px;
   border-radius:2px;
}
.controls progress span {
	width:0%;
	height:100%;
	display:inline-block;
}

// below two style set the color of the progress
.controls progress::-moz-progress-bar {
   background-color:#eee;
}

.controls progress::-webkit-progress-value {
   background-color:#eee;
}

.controls progress[data-state="fake"] {
   background:#e6e6e6;
   height:65%;
}
.controls progress span {
   width:0%;
   height:100%;
   display:inline-block;
   background-color:#2a84cd;
}

/* fullscreen */
html:-ms-fullscreen {
	width:100%;
}
:-webkit-full-screen {
	background-color:transparent;
}
/* hide controls on fullscreen with WebKit */
figure[data-fullscreen=true] video::-webkit-media-controls {
	display:none !important;
}
figure[data-fullscreen=true] {
	max-width:100%;
	width:100%;
	margin:0;
	padding:0;
}
figure[data-fullscreen=true] video {
	height:auto;
}
figure[data-fullscreen=true] figcaption {
	display:none;
}
figure[data-fullscreen=true] .controls {
	position:absolute;
	bottom:2%;
	width:100%;
	z-index:2147483647;
}
figure[data-fullscreen=true] .controls li {
	width:5%;
}
figure[data-fullscreen=true] .controls .progress {
	width:68%;
}
@media (min-width: 768px) {
  .controls {
      border-top: none;
      backdrop-filter: none;
  }
}
`
