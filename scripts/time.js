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
    ms = whichList = whichLine = 1,
    swInterval,
    el;

function clearVars(){
  hsw = msw = ssw = 0;
  ms = 0;
}

function setAttrs(el, attrs){
  for(var key in attrs){
    el.setAttribute(key, attrs[key]);
  }
}

function start(){
  var whatIsIt = "start";
  makeHistory(whatIsIt);
  el = document.getElementById('s-s');
  setAttrs(el, {"class":"stop-btn", "onclick":"stop();", "value":"STOP"});
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
  el = document.getElementById('s-s');
  setAttrs(el, {"class":"start-btn", "onclick":"start();", "value":"START"});
  document.getElementById('pause').disabled = true;
  document.getElementById('lap').disabled = true;
  el = document.getElementById('pause');
  setAttrs(el, {"class":"pause-btn", "onclick":"pause();", "value":"PAUSE"});
}

function resume(){
  start();
  var el = document.getElementById('pause');
  setAttrs(el, {"class":"pause-btn", "onclick":"pause();", "value":"PAUSE"});
  document.getElementById('lap').disabled = false;
}

function pause(){
  clearInterval(swInterval);
  el = document.getElementById('pause');
  setAttrs(el, {"class":"resume-btn", "onclick":"resume();", "value":"RESUME"});
  document.getElementById('lap').disabled = true;
}

var whichLap=1;

function lap(){
  var whatIsIt = "lap no. "+whichLap;
  makeHistory(whatIsIt);
  whichLap++;
}

function checkZero(i){
  i = ('0' + i).slice(-2);
  return i;
}

function reset(){
  var listC = document.getElementById('list-cntr');
  listC.innerHTML = "<ol id='list1'></ol>";
}

function makeHistory(whatIsIt){
  ms = checkZero(ms);
  ssw = checkZero(ssw);
  msw = checkZero(msw);
  hsw = checkZero(hsw);
  var listLine = document.createElement("LI");
  document.getElementById('list1').appendChild(listLine);
  listLine.setAttribute("id", "listLine"+whichLine);
  document.getElementById('listLine'+whichLine).innerHTML = hsw+":"+msw+":"+ssw+":"+ms+" "+whatIsIt;
  whichLine++;
}
