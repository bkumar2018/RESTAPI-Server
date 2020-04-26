
const express = require('express');
const app = express()

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

//start the node server on port 3000
app.listen(3000)



