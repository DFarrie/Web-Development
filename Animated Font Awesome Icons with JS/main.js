//Chain breaking animation
function brakeChain() {
  var chain = document.getElementById('chain');
  chain.innerHTML = "&#xf0c1;"

  setTimeout(function() {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

//Call animation
brakeChain();

//Run animation every 2 seconds
setInterval(brakeChain, 2000);

//Battery charging animation
function chargeBattery() {
  var battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;";

  setTimeout(function() {
    battery.innerHTML = "&#xf243;";
  }, 1000);

  setTimeout(function() {
    battery.innerHTML = "&#xf242;";
  }, 2000);

  setTimeout(function() {
    battery.innerHTML = "&#xf241;";
  }, 3000);

  setTimeout(function() {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

//Call animation
chargeBattery();

//Run animation every 5 seconds
setInterval(chargeBattery, 5000);

//Hourglass sand animation
function hourglassSand() {
  var hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = "&#xf251;";

  setTimeout(function() {
    hourglass.innerHTML = "&#xf252;";
  }, 1000);

  setTimeout(function() {
    hourglass.innerHTML = "&#xf253;";
  }, 2000);
}

//Call animation
hourglassSand();

//Run animation every 3 seconds
setInterval(hourglassSand, 3000);
