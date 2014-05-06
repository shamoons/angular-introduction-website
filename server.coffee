express = require "express"
app     = express()



app.configure ->
  app.use express.static(__dirname + '/public')
  app.use app.router


console.log __dirname + '/public'
app.get "*", (req, res) ->
  res.sendfile "index.html"


app.listen 1234
console.log "Server listening on port 1234"