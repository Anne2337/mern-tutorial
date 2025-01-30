const addNumbers = (req , res) => {
    let answer = req.body.num1 + req.body.num2;
    res.status(200).json(answer);
}

const homePage = (req , res) => {
    console.log(req.body)
    res.status(200).json({message: 'welcome to homepage'})
}

const user = {
    uname: "anne",
    email: "anne@gmail.com",
    password: "Anne123#@"
}

const loginUser = (req , res) =>{
    const {uname, email, password } = req.body
    if(email === user.email && password === user.password) {
        res.status(200).json({message: 'login succeffuly'})
    }
    res.status(404).json({message: 'invalid credentials'})
}
module.exports = {addNumbers, homePage, loginUser}