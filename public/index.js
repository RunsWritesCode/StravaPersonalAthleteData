var app = function() {
  var url = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + keys.apiKey;
  var request = new XMLHttpRequest();
  request.open("GET", url);

  request.addEventListener('load', function() {
    var activitiesData = JSON.parse(request.responseText);
    renderList(activitiesData);
  });

  request.send();

};

  var renderList = function(allActivities) {
    var mainDiv = document.getElementById('main');

    allActivities.forEach(function (activity) {
      var div = createListItem(activity);
      mainDiv.appendChild(div);
    });

  };

  var createListItem = function(singleActivity) {
    var insideDiv = document.createElement('div');
    var pTag = document.createElement('p');
    pTag.innerText = singleActivity.name;
    var pTag2 = document.createElement('p');
    pTag2.innerText = singleActivity.distance/1000 + "m";
    insideDiv.appendChild(pTag);
    insideDiv.appendChild(pTag2);
    return insideDiv
  };


window.addEventListener('load', app);


// var time = document.createElement('time');
// time.innerText = singleActivity.moving_time;
// var elevation = document.createElement('elevation');
// elevation.innerText = singleActivity.total_elevation_gain;
