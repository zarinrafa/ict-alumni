const alumniBodylement = document.querySelector('.alumniBody')



let alumni = `<tr>
<td>
  <a href="proj.Mueed.html" target="_blank">Abdullah Al Mueed</a>
</td>
<td>ICT-03</td>
<td>2020</td>

<td>Key Account Manager</td>
<td>O+</td>
<td>01674323259</td>
</tr>`


const getData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })

const url = `http://localhost:8000/api/alumni/`

getData(url)
  .then(data => {
    let content = [];
    content = data.map(data => (
      `<tr>
      <td>
        <a href="proj.Mueed.html" target="_blank">${data.name}</a>
      </td>
      <td>${data.batch}</td>
      <td>${data.gradyear}</td>
      
      <td>${data.occupation}</td>
      <td>${data.bloodgroup}</td>
      <td>${data.phonenumber}</td>
      
      </tr>`
    ))
    alumniBodylement.innerHTML = content
  })
  .catch(error => console.log(error.message))