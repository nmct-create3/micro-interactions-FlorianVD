const handlePasswordSwitcher = function() {
  const passwordInput = document.querySelector('.js-password-input'),
        passwordToggle = document.querySelector('.js-password-toggle');

        passwordToggle.addEventListener('change', function() {
          if (passwordInput.type === 'text')
            passwordInput.type = 'password';
          else
            passwordInput.type = 'test';
        })
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('hallo');
  
  handlePasswordSwitcher();
});