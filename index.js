const express = require('express');
const app = express()

const bodyParser = require('body-parser');
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//User Data
const userInfoData = [
        {
                id:1,
                firstname:"Birender",
                lastname:"Kumar",
                city:"Pune",
                pin:12345
        },
        {
                id:2,
                firstname:"Bipin",
                lastname:"Singh",
                city:"Delhi",
                pin:54321
        },
        {
                id:3,
                firstname:"Chanchal",
                lastname:"Singh",
                city:"Mumbai",
                pin:67890
        },
        {
                id:4,
                firstname:"Abhi",
                lastname:"Singh",
                city:"Pune",
                pin:12345
        },
        {
                id:5,
                firstname:"Arjun",
                lastname:"Singh",
                city:"Ballia",
                pin:54321
        }

];

//create end points urls
app.get('/api', function (req, res) {
  res.send('Hello Welcome to APIServer for userdata.')
})

app.get('/api/users', function (req, res) {
  res.json(userInfoData)
})

app.get('/api/users/:id', function (req, res) {
  const id = req.params.id;
  const user = userInfoData.find(user => user.id == id)

  if(user){
        res.json(user)
  }
  else{
        res.send('This user not exists')
  }

})

//create end point url for post request
app.post('/api/addusers', function(req, res){
        const newUser = {
                id: userInfoData.length+1,
                firstname : req.body.firstname,
                lastname: req.body.lastname,
                city: req.body.city,
                pin : req.body.pin
        }
        userInfoData.push(newUser);
        res.status(201).send({
          sucess:'true',
          message: 'user added successfully',
          userInfoData
        })
});



//start the node server on port 3000
var server = app.listen(3000, function(){

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
