//https://dev.to/guimg/how-to-serve-nodejs-applications-with-nginx-on-a-raspberry-jld

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The Hello World
router.get('/api',(req, res) => {
  res.send("Hello from port 3000!");
});

router.post('ipUpdate',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
});

// add router in the Express app.
app.use("/", router);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
