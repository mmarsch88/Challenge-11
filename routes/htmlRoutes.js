const router = require("express").Router();
const path = require("path")

//* `GET /notes` should return the `notes.html` file.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })

//* `GET *` should return the `index.html` file.
/*app.get('/', (req, res) => {
    res.send('hello world')
  })
*/

module.exports = router