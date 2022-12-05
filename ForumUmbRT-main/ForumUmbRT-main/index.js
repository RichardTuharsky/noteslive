
//funkcia na pridavanie
var myActivities = [];

document.querySelector('form button').addEventListener('click', function(event) {

  var inputs = document.querySelectorAll('form input');
  var newActivity = {};
  for (var i = 0; i < inputs.length; i++) {
    newActivity[inputs[i].name] = inputs[i].value;
    inputs[i].value = '';
  }
  myActivities.push(newActivity);
  console.log(myActivities);
  event.preventDefault();

},false);


