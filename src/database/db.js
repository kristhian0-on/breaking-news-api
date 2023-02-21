import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log('Wait connecting to the database')

    mongoose.set("strictQuery", false);

    mongoose
        .connect(
        "mongodb://root:root@ac-wsxagob-shard-00-00.znnbqm2.mongodb.net:27017,ac-wsxagob-shard-00-01.znnbqm2.mongodb.net:27017,ac-wsxagob-shard-00-02.znnbqm2.mongodb.net:27017/?ssl=true&replicaSet=atlas-3ah88u-shard-0&authSource=admin&retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;