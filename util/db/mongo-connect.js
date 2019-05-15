const mongodb = require('mongodb');
const client = mongodb.MongoClient;

const options = {
    useNewUrlParser:true
}

const connect = async () => {
    try{
        const res = await client.connect(
            `mongodb+srv://default_user:123321@learningmongo-i-bk0ng.mongodb.net/test?retryWrites=true`,
            options
        )
        console.log(`Now connected to MongoDB!`);
        return true;
    }catch(e){
        console.log(`Error occured while connecting to MongoDB! - ${e}`);
        return false;
    }
}

exports.connect = connect