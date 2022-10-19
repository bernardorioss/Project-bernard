function loginPage() {
    window.location.href = "login.html";
  }

  const form = document.getElementById('form');
  const campos = document.querySelectorAll('.required');
  const spans = document.querySelectorAll('.span-required');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   nameValidate();
  //   emailValidate();
  //   mainEnderecoValidate();
  //   mainPasswordValidate();
  //   mainPasswordNewValidate();

  // })


  function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
  }

   function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
   }


  function nameValidate(){
    if(campos[0].value.length < 3 ) {
      setError(0);
    }
    else {
      removeError(0);
    }
  }

  function emailValidate() {
    if(emailRegex.test(campos[1].value)){
      removeError(1);
    } else {
      setError(1);
    }
  }

  function mainEnderecoValidate() {
    if(campos[2].value.length < 8)
    {
      setError(2);
    }
    else
    {
      removeError(2);
    }
  }  



  function mainPasswordValidate() {
    if(campos[3].value.length < 8)
    {
      setError(3);
    }
    else
    {
      removeError(3);
    }
  }  

  function mainPasswordNewValidate() {
    if(campos[4].value === campos[3].value)
    {
      removeError(4);
    }
    else
    {
      setError(4);
    }
  }  