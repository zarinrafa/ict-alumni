
const handleRegistration = () => {

  console.log("comming here")
  const userid = document.querySelector('#userid').value
  const fullname = document.querySelector('#fullName').value
  const batch = document.querySelector("#batch").value
  const email = document.querySelector("#email").value
  const password = document.querySelector('#password').value
  const bloodgroup = document.querySelector('#bloodGroup').value
  const occupation = document.querySelector('#occupation').value
  const phonenumber = document.querySelector('#phoneNumber').value
  const gradyear = document.querySelector('#gradYear').value

  fetch('http://localhost:8000/api/auth/register/', {
    method: "POST",
    body: JSON.stringify(
      {
        userid,
        email,
        fullname,
        password,
        batch,
        gradyear,
        occupation,
        bloodgroup,
        phonenumber
      }
    ),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => {
      console.log('registration completed')
      window.location.replace("/login.html")
    })
    .catch(err => {
      console.log(err)
    });
}