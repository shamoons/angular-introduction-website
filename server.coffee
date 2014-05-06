express = require "express"
app     = express()
    
app.get "/", (req, res) ->
  res.sendfile "index.html"

# app.configure ->
#   app.use(express.methodOverride());
#   app.use(express.bodyParser());
#   app.use(express.static(__dirname + '/public'));
#   app.use(express.errorHandler({
#     dumpExceptions: true, 
#     showStack: true
#   }));
#   app.use(app.router);

app.listen 1234