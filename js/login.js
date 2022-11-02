class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit()
  }
  validateOnSubmit = async () => {
    let self = this;
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let error = false;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`)
        if (self.validateFields(input) == false) {
          error = true;
        }
        if (!error) {
          //successfully got the info
          //do login api here

          const userid = document.querySelector('#userId').value
          const password = document.querySelector('#password').value
          console.log(userid, password)
          fetch('http://localhost:8000/api/auth/login/', {
            method: "POST",
            body: JSON.stringify(
              {
                userid,
                password
              }
            ),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          })
            .then(response => response.json())
            .then(json => {
              console.log('accepted')
              localStorage.setItem("auth", json.token)
              this.form.submit()
              window.location.replace("/index.html")
            })
            .catch(err => {
              console.log(err)
              localStorage.removeItem("auth")
            });

        }
        else { console.group("there is an error") }
      })
    })
  }
  setStatus = (field, message, statuss) => {
    const errorMessage = field.parentElement.querySelector(".error-message")
    if (statuss === 'success') {
      errorMessage = '';
      field.classList.remove("input-error")
    }
    if (statuss === 'error') {
      errorMessage.innerText = message;
      field.classList.add("input-error")
    }
  }

  validateFields = (field) => {
    if (field?.value?.trim() === "") {
      console.log(field.previousElementSibling)
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      )
      return false
    }
    else {
      this.setStatus(field, null, "succcess")
      return true;
    }

  }
}
const form = document.querySelector('.loginForm')

if (form) {
  const fields = ['userId', 'password'];
  const validator = new Login(form, fields);
}

console.log("comming here")