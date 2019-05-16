const mongoose = require('mongoose');

const options = {
    useNewUrlParser:true
}

let _db;

const connect = async () => {
    try{
        const res = await mongoose.connect(
            `mongodb+srv://default_user:123321@learningmongo-i-bk0ng.mongodb.net/colorbook?retryWrites=true`,
            options
        )

        console.log(`Now connected to MongoDB!`);
        _db = mongoose.connection;
        return true;

    }catch(e){
        console.log(`Error occured while connecting to MongoDB! - ${e}`);
        throw e;
    }
}

const connection = () => {
    return (_db) ? _db : null;
}

exports.connect = connect
exports.connection = connection