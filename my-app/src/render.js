//buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');


const { desktopCapturer, remote } = require('electron');

// Get available video sources
function getVideoSources() {}