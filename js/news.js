const newsBodyElement = document.querySelector('#newsContainer')

const getData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })

const url = `http://localhost:8000/api/notices/`

getData(url)
  .then(data => {
    let content = [];
    content = data.filter(data => data.isNews === true).map(data => (
      ` 
      <h3>Footbal Tournament</h3>
      <p>
        The football tournament of the Bangladesh University of
        professionals is going on.The legendary fight between the
        departments have been ongoing for a while now.
      </p>
      <a href="#" class="btn">Learn More</a>
    </div>`
    ))
    newsBodyElement.innerHTML = content
  })
  .catch(error => console.log(error.message))