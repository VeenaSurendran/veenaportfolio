const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const subject_error = document.getElementById('subject_error');
const message_error = document.getElementById('message_error')

form.addEventListener('submit', (e)=>
{
  var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(name.value === '' || name.value == null)
  {
      e.preventDefault();
      name_error.innerHTML = "Name is required"
  }
  else
  {
    name_error.innerHTML = ""
  }

  if(!email.value.match(email_check))
  {
    e.preventDefault();
    email_error.innerHTML = "Email is required"
  }

  if(subject.value === '' || null)
  {
    e.preventDefault();
    subject_error.innerHTML = "Subject is required"
  }

  if(message.value === '' || null)
  {
    e.preventDefault();
    message_error.innerHTML = "Message is required"
  }
})