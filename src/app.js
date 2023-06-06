const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const bcrypt = require('bcrypt')
// const initializePassport = require('./passport-config')
const flash = require("express-flash")
const session = require("express-session")

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy


//---------- Models ----------
require('./db/connect')
const driver_request = require("./models/driver_request")
const carpenter = require("./models/carpenter")
const ac_request = require("./models/ac_request")
const car_rent = require("./models/car_rent")
const electrician = require("./models/electrician")
const fridge = require("./models/fridge")
const gas_stove = require("./models/gas_stove")
const laundary = require("./models/laundary")
const packet_mover = require("./models/packet_mover")
const painter = require("./models/painter")
const plumber = require("./models/plumber")
const washing_machine = require("./models/washing_machine")
const doctor = require("./models/doctor")
const app_dev = require("./models/app_dev")
const dj_request = require("./models/dj_request")
const graphic_designer = require("./models/graphic_designer")
const photographer = require("./models/photographer")
const soft_dev = require("./models/soft_dev")
const web_dev = require("./models/web_dev")
const const_worker = require("./models/const_worker")
const registration = require("./models/registration")



const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../template/views")
const partials_path = path.join(__dirname, "../template/partials")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/transport/driver_request", (req, res) => {
    res.render("driver_request")
})

app.get("/registration", (req, res) => {
    res.render("registration")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/domestic/ac_request", (req, res) => {
    res.render("ac_request")
})

app.get("/domestic/carpenter", (req, res) => {
    res.render("carpenter")
})

app.get("/transport/car_rent", (req, res) => {
    res.render("car_rent")
})

app.get("/domestic/electrician", (req, res) => {
    res.render("electrician")
})

app.get("/domestic/fridge", (req, res) => {
    res.render("fridge")
})

app.get("/domestic/gas_stove", (req, res) => {
    res.render("gas_stove")
})

app.get("/domestic/laundary", (req, res) => {
    res.render("laundary")
})

app.get("/domestic/packet_mover", (req, res) => {
    res.render("packet_mover")
})

app.get("/domestic/painter", (req, res) => {
    res.render("painter")
})

app.get("/domestic/plumber", (req, res) => {
    res.render("plumber")
})

app.get("/domestic/washing_machine", (req, res) => {
    res.render("washing_machine")
})

app.get("/health/doctor", (req, res) => {
    res.render("doctor")
})

app.get("/professional/app_dev", (req, res) => {
    res.render("app_dev")
})

app.get("/professional/dj_request", (req, res) => {
    res.render("dj_request")
})

app.get("/professional/graphic_designer", (req, res) => {
    res.render("graphic_designer")
})

app.get("/professional/photographer", (req, res) => {
    res.render("photographer")
})

app.get("/professional/soft_dev", (req, res) => {
    res.render("soft_dev")
})

app.get("/professional/web_dev", (req, res) => {
    res.render("web_dev")
})

app.get("/professional/const_worker", (req, res) => {
    res.render("const_worker")
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard")
})


// ---------- Start Login & Register ----------

// Config Registration
app.get("/register", (req, res) => {
    res.render("registration")
})


app.post("/registration", async (req, res) => {
    try {
        const hashedpassword = await bcrypt.hash(req.body.password, 10);
        const RegisterModal = new registration({
            full_name: req.body.name,
            email: req.body.email,
            password: hashedpassword,
        })

        const clientGet = await RegisterModal.save()
        console.log(clientGet)
        res.render("login")
    }
    catch (err) {
        console.log("Error coming from Registration : " + err)
    }
})


// Config Login
app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        // const hashpassword = bcrypt.hash(password, 10)

        console.log(`${email} and ${password} `)

        const useremail = await registration.findOne({ email: email })
        // console.log(useremail)

        // Comparing the bcrypt hash with the user's input password
        bcrypt.compare(password, useremail.password, function (err, result) {
            if (err) {
                // Handle the error
                console.error(err);
            } else {
                if (result) {
                    // Passwords match
                    console.log('Passwords match!');
                    res.status(201).render("index", {logedIn: useremail})
                } else {
                    // Passwords do not match
                    console.log('Passwords do not match!');
                }
            }
        });

    } catch (err) {
        res.status(400).send("Invalid Credentials!")
    }
})


const jwt = require("jsonwebtoken")

const createToken = (async () => {
    const token = await jwt.sign({_id: "647c7366458a457ee006c7a0"}, "mynameisrajanwhatdoyouthink")
    console.log(token);

    const userVer = jwt.verify(token, "mynameisrajanwhatdoyouthink")
    console.log(userVer)
})

createToken();


// ---------- End Login & Register ----------



// create a new customer in our database
app.post("/driver_requet", async (req, res) => {
    try {
        const RequestDriver = new driver_request({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/carpenter", async (req, res) => {
    try {
        const RequestDriver = new carpenter({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/ac_request", async (req, res) => {
    try {
        const RequestDriver = new ac_request({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})


// ---Start Editing 6/3/2023

const userDetails = car_rent.find({});
app.post("/car_rent", async (req, res) => {
    try {
        const RequestDriver = new car_rent({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        userDetails.then((data) => {
            res.render('dashboard', { record: data })
        }).catch((err) => {
            console.log(err)
        })
        return;
    } catch (err) {
        res.status(400).send(err);
    }
})

const driver = []
app.get('/customer_info', (req, res) => {
    car_rent.find().then((data) => {
        res.render('dashboard', { record: data });
    }).catch((err) => {
        console.log(err)
    })
})

// ---End

app.post("/electrician", async (req, res) => {
    try {
        const RequestDriver = new electrician({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/fridge", async (req, res) => {
    try {
        const RequestDriver = new fridge({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/gas_stove", async (req, res) => {
    try {
        const RequestDriver = new gas_stove({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/laundary", async (req, res) => {
    try {
        const RequestDriver = new laundary({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/packet_mover", async (req, res) => {
    try {
        const RequestDriver = new packet_mover({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/painter", async (req, res) => {
    try {
        const RequestDriver = new painter({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/plumber", async (req, res) => {
    try {
        const RequestDriver = new plumber({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/washing_machine", async (req, res) => {
    try {
        const RequestDriver = new washing_machine({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/doctor", async (req, res) => {
    try {
        const RequestDriver = new doctor({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/app_dev", async (req, res) => {
    try {
        const RequestDriver = new app_dev({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/dj_request", async (req, res) => {
    try {
        const RequestDriver = new dj_request({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/graphic_designer", async (req, res) => {
    try {
        const RequestDriver = new graphic_designer({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/photographer", async (req, res) => {
    try {
        const RequestDriver = new photographer({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/soft_dev", async (req, res) => {
    try {
        const RequestDriver = new soft_dev({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/web_dev", async (req, res) => {
    try {
        const RequestDriver = new web_dev({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/const_worker", async (req, res) => {
    try {
        const RequestDriver = new const_worker({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_no: req.body.phone_no,
            email: req.body.email,
            hiring: req.body.hiring,
            vehicle: req.body.vehicle,
            description: req.body.description,
            house_no: req.body.house_no,
            road_area: req.body.road_area,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
        })

        const clientGet = await RequestDriver.save()
        res.status(201).render("index")
    } catch (err) {
        res.status(400).send(err);
    }
})
//  ------------------------------------------ this section is error for the contact psot --------------------------------------------------


// app.post("/contact", async (req, res) => {
//     try {

//         const password = req.body.password;
//         const cpassword = req.body.confirm_password;

//         if(password == cpassword){

//         const RequestDriver = new contact({
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             phone_no: req.body.phone_no,
//             password: req.body.password,
//             confirm_password: req.body.confirm_password,
//             email: req.body.email,
//             hiring: req.body.hiring,
//             vehicle: req.body.vehicle,
//             description: req.body.description,
//             house_no: req.body.house_no,
//             road_area: req.body.road_area,
//             landmark: req.body.landmark,
//             city: req.body.city,
//             state: req.body.state,
//             pincode: req.body.pincode,
//         })

//         const clientGet = await RequestDriver.save()
//         res.status(201).render("index")
//     }else{
//         res.send("password didn't match")
//     }
//     } catch(err) {
//         res.status(400).send(err);
//     }
// })


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})