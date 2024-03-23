//UNIVERSITI KUALA LUMPUR
//NUR ALYA NABILAH BINTI ZULKIFLI
//52052120076
//FARAH AIN SOFEA BINTI ARIS FADZILAH
//52052120008
//MADAM NORSHAHARIZAN PUTEH
//WEEK 19

//Contact Us
let emailElement = document.querySelector('#email');
  let phonenumberElement = document.querySelector('#phonenumber');
  let submitButton = document.querySelector('#submit-button');
  
submitButton.addEventListener('click',function(e){
  e.preventDefault();
  let emailValue = emailElement.value;
  let phonenumberValue = phonenumberElement.value;

  if (emailValue.includes('@')){
    //all good
    alert('Thank you for your message');
  }
  else{
    alert('Oh no, that does not look like a valid email address :( Please try again');
  }

  console.log('email:',emailValue);
  console.log('telephone number:',phonenumberValue);
})

