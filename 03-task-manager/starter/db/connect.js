const mongoose = require("mongoose")

//const connetionString = "mongodb+srv://sereepsm:S2511utisa@clusterzero.poi99tk.mongodb.net/?retryWrites=true&w=majority"


const connectDB = (url) => {

    return mongoose //returning promise
    .connect(url,{ //delete dumb warning
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true
    })

}
module.exports = connectDB;

/*mongoose
    .connect(connetionString,{ //delete dumb warning
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true
    })
    .then(()=>console.log("Connected to the DB"))
    .catch((err) => console.log(err));*/