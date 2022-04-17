  deg = 0;
  rgb_v = [];
  rgb_d = [];
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  for(i = 0; i < 3; i++) {
    rgb_v[i] = getRndInteger(0, 255);
  }
  for(i = 0; i < 3; i++) {
    rgb_d[i] = getRndInteger(0, 1);
  }
  setInterval(function(){
    document.getElementById("main").style.backgroundImage = "linear-gradient(" + deg + "deg, rgba(255, 0, 0, 0.5), rgba(" + rgb_v[0] + ", " + rgb_v[1] + ", " + rgb_v[2] + ", 0.25), rgba(0, 0, 255, 0.5))";
      if(++deg == 360)
        deg = 0;
    for(i = 0; i < 3; i++) {
      if(rgb_v[i] == 0)
        rgb_d[i] = 1;
      else if(rgb_v[i] == 255)
        rgb_d[i] = 0;
      if(rgb_d[i])
        rgb_v[i]++;
      else
        rgb_v[i]--;
    }
  }, 50);
