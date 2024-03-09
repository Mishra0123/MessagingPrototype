import mongoose from 'mongoose';

const Connection = async () => {
    // const URL = "mongodb://ritikbth2000:Ritik@123@ac-kpdnkfs-shard-00-00.wt4pdex.mongodb.net:27017,ac-kpdnkfs-shard-00-01.wt4pdex.mongodb.net:27017,ac-kpdnkfs-shard-00-02.wt4pdex.mongodb.net:27017/?ssl=true&replicaSet=atlas-u2ub43-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp";
    const URL = "mongodb+srv://ritikbth2000:Ritik@123@ritik1.wt4pdex.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;