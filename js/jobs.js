const jobBodylement = document.querySelector('#jobContainer')



const getData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })

const url = `http://localhost:8000/api/jobs/`

getData(url)
  .then(data => {
    let content = [];
    content = data.map(data => (
      `<div class="grid-container">
       <div class="box1">
        <img src="job.webp" />
        <a href="#"><h2>${data.title}</h2> </a>
        <h2>${data.company}</h2>
        <p>
         ${data.details}
        </p>
        <button type="button">${data.salary}</button>
        <p>${data.company}</p>
      </div>
    </div>`
    ))
    // jobBodylement.innerHTML = content
  })
  .catch(error => console.log(error.message))

console.log("comming here")