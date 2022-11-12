const showdown  = require('showdown')
const fs = require('fs')
const converter = new showdown.Converter()

const writeIndexHTML = async () => {
    const text = await fs.readFileSync('./README.md', 'utf8')

    let html = await converter.makeHtml(text)
    html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MailValid</title>
        <link rel="icon" href="./public/logo.ico">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <a href="https://github.com/yd-915/MailValid/" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
      <h1 id="emailvalidator">MailValid Api </h1>
<p>A REST API that checks for disposable and invalid emails</p>
<h2 id="howtoadddomains">New domains to be added every week</h2>
<h2 id="docs">Docs</h2>
<h3 id="mainroute">Base URL</h3>
<p><a href="https://emailapi.onrender.com/">https://emailapi.onrender.com/</a></p>
<h3 id="validateanemail">Email Validation</h3>
<p>The route for validating an email 
<code>/api/validate</code>
Note: Only accepts the query param email, it should be called like
<code>/api/validate?email=email@example.com</code></p>
<h3 id="checklists">Check lists</h3>
<p>The route for checking the lists of disposable or non disposable emails <code>/api/lists</code></p>

<div class="bot">
    
<a href="">Try Today</a>
</div>

<div class="down">
    Photo by <a href="https://unsplash.com/@noreturns__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thijs Slootjes</a> on <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
</div>
    ${html}
    </body>
    </html>`

    fs.writeFile('./public/index.html', html, err => {
        if (err) {
            console.error(err)
        }
    })
}

module.exports = writeIndexHTML
