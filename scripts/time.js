window.onload = setInterval(function ac_time(){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  m = checkZero(m);
  s = checkZero(s);
  document.getElementById('ac-time').innerHTML = h+":"+m+":"+s;
}, 1000);



function startTime(){
  var start = document.getElementById('ac-time').innerHTML;
  document.getElementById('start-time').innerHTML = start;
}

function endTime(){
  var end = document.getElementById('ac-time').innerHTML;
  document.getElementById('end-time').innerHTML = end;
}

var hsw = msw = ssw = 0,
    ms = 1,
    swInterval;

function clearVars(){
  hsw = msw = ssw = 0;
  ms = 1;
}

function start(){
  document.getElementById('s-s').setAttribute('class', 'stop-btn');
  document.getElementById('s-s').setAttribute('onclick', 'stop();');
  document.getElementById('s-s').setAttribute('value', 'STOP');
  swInterval = setInterval(function sw(){
    if(ms == 100){
      ms = 0;
      ssw++;
    }
    if(ssw == 60){
      ssw = 0;
      msw++;
    }
    if(msw == 60){
      msw = 0;
      hsw++;
    }
    ms = checkZero(ms);
    ssw = checkZero(ssw);
    msw = checkZero(msw);
    hsw = checkZero(hsw);
    document.getElementById('stopwatch').innerHTML = hsw+":"+msw+":"+ssw+":"+ms;
    ms++;
  }, 10)
  document.getElementById('pause').disabled = false;
  document.getElementById('lap').disabled = false;
}

function stop(){
  clearInterval(swInterval);
  clearVars();
  document.getElementById('s-s').setAttribute('class', 'start-btn');
  document.getElementById('s-s').setAttribute('onclick', 'start();');
  document.getElementById('s-s').setAttribute('value', 'START');
  document.getElementById('pause').disabled = true;
  document.getElementById('lap').disabled = true;
  document.getElementById('pause').setAttribute('class', 'pause-btn');
  document.getElementById('pause').setAttribute('onclick', 'pause();');
  document.getElementById('pause').setAttribute('value', 'PAUSE');
}

function resume(){
  start();
  document.getElementById('pause').setAttribute('class', 'pause-btn');
  document.getElementById('pause').setAttribute('onclick', 'pause();');
  document.getElementById('pause').setAttribute('value', 'PAUSE');
  document.getElementById('lap').disabled = false;
}

function pause(){
  clearInterval(swInterval);
  document.getElementById('pause').setAttribute('class', 'resume-btn');
  document.getElementById('pause').setAttribute('onclick', 'resume();');
  document.getElementById('pause').setAttribute('value', 'RESUME');
  document.getElementById('lap').disabled = true;
}

function lap(){

}

function checkZero(i){
  i = ('0' + i).slice(-2);
  return i;
}
