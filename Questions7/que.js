document.addEventListener('DOMContentLoaded', function() {
    var toggleBtns = document.querySelectorAll('.toggle-btn');
  
    toggleBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var answer = this.nextElementSibling;
  
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  });
  