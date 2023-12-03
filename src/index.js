document.addEventListener("DOMContentLoaded", function () {
  animateProgressBarJava(0, 100, 1500); // Start at 0, end at 100, animation duration 1000ms
  animateProgressBarJs(0, 80, 1500);
  animateProgressBarPython(0, 70, 1500);
  animateProgressBarSQL(0,80,1500);
  animateProgressBarGit(0,100,1500);
});



function animateProgressBarJava(startValue, endValue, duration) {
  var progressBar = document.getElementById('java');
  var increment = (endValue - startValue) / (duration / 10); // Increment for each step

  var interval = setInterval(function () {
    startValue += increment;
    progressBar.style.width = startValue + "%";
    progressBar.setAttribute("aria-valuenow", startValue);

    if (startValue >= endValue) {
      clearInterval(interval);
    }
  }, 10);
}

function animateProgressBarJs(startValue, endValue, duration) {
    var progressBar = document.getElementById('js');
    var increment = (endValue - startValue) / (duration / 10); // Increment for each step
    
    var interval = setInterval(function() {
      startValue += increment;
      progressBar.style.width = startValue + '%';
      progressBar.setAttribute('aria-valuenow', startValue);
      
      if (startValue >= endValue) {
        clearInterval(interval);
      }
    }, 10);
}

function animateProgressBarPython(startValue, endValue, duration) {
    var progressBar = document.getElementById('py');
    var increment = (endValue - startValue) / (duration / 10); // Increment for each step
    
    var interval = setInterval(function() {
      startValue += increment;
      progressBar.style.width = startValue + '%';
      progressBar.setAttribute('aria-valuenow', startValue);
      
      if (startValue >= endValue) {
        clearInterval(interval);
      }
    }, 10);
  }

  function animateProgressBarSQL(startValue, endValue, duration) {
    var progressBar = document.getElementById('sql');
    var increment = (endValue - startValue) / (duration / 10); // Increment for each step
    
    var interval = setInterval(function() {
      startValue += increment;
      progressBar.style.width = startValue + '%';
      progressBar.setAttribute('aria-valuenow', startValue);
      
      if (startValue >= endValue) {
        clearInterval(interval);
      }
    }, 10);
  }

  function animateProgressBarGit(startValue, endValue, duration) {
    var progressBar = document.getElementById('git');
    var increment = (endValue - startValue) / (duration / 10); // Increment for each step
    
    var interval = setInterval(function() {
      startValue += increment;
      progressBar.style.width = startValue + '%';
      progressBar.setAttribute('aria-valuenow', startValue);
      
      if (startValue >= endValue) {
        clearInterval(interval);
      }
    }, 10);
  }
