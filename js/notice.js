const noticeBodylement = document.querySelector('#contents')



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
    let content = [''];
    content = data.filter(data => data.isNews === false).map(data => {
      const newDate = new Date(data.date).toLocaleDateString();

      return `
      <div><h1>${newDate}</h1></div>
      <div>
          <a href="${data.link}">
              <strong>
              ${data.title}
              </strong>
          </a>
      </div>
      `
    })
    noticeBodylement.innerHTML = "<div><strong><h1>Date</h1></strong></div><div><strong><h1>Notice</h1></strong></div>"
      + content.join("")
  })
  .catch(error => console.log(error.message))