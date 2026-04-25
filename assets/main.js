(function(){
  const y = document.querySelector('[data-year]');
  if(y) y.textContent = new Date().getFullYear();

  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const n = form.querySelector('[name=name]').value.trim();
      const em = form.querySelector('[name=email]').value.trim();
      const msg = form.querySelector('[name=message]').value.trim();
      const subject = encodeURIComponent('Consulting inquiry from ' + (n || 'Website'));
      const body = encodeURIComponent('Name: ' + n + '\nEmail: ' + em + '\n\nMessage:\n' + msg);
      window.location.href = 'mailto:solutionsfirstconsult@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
})();
