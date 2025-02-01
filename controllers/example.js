/*const addNumbers = (req , res) => {
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
module.exports = {addNumbers, homePage, loginUser}  */



const credentials = (req,res) =>{
    const username = req.body.username.toUpperCase();
    const email = req.body.email.toLowerCase();


    res.json({message: `MY NAME IS ANNE and my email is atuy`});
        
 
}



 const calculator =(req,res) => {
    console.log(req.body);
        const { num1, num2, operator } = req.body;  
    
    const operations = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
    };
    console.log('Operator:', operator);
    const result = operations[operator] ?? "Invalid operator";

    res.json({ result });



}


const user = {
    name: "anne",
    age:"29"
};

user.age = parseInt(user.age, 10);

const student = (req,res) =>{
    const{ name,age} = req.body
    if(age===user.age && name===user.name){
        res.status(200).json({message: 'my name is Anne and am 29 year old'})
        //res.status(200).json({message: 'uri umujura shaiii'});
    }
}






module.exports = {calculator ,student,credentials} 