

const express =require('express');
const bodyParser  = require('body-parser');
const User = require('./db/Schema/users');
const cors = require('cors');
const app = express();
require('./db/db')
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());  //to parse JSON request
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
}));


// Routes

app.get('/',(req,res) => {
    res.status(200).json({message:'server is healty and running!'});
});

app.get('/show',async(req,res) =>{
    let userData = await User.find({});
    if(!userData){
        res.status(401).send({data:{},msg:'not found'});
    } else{
        res.status(200).send({data:userData,msg:'found'});
    }
})

app.post('/user/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Validate
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Create user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "Account created successfully", user: { name, email } });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// login 

app.post('user/login', async(req,res) => {
    try {
        const {email,password} = req.body;
        const userModel = await User.findOne({email}) 
    } catch (error) {
        
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// Start server 
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);