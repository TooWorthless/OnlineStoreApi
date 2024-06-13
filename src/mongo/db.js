import mongoose from 'mongoose';


async function connect(url) {
    try {
        if (url) {
            await mongoose.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log(`Succesfully connected to MongoDB(url: ${url})`);
        }
        else {
            console.log('Empty \'url\' parameter!');
            process.exit(1);
        }
    }
    catch (err) {
        console.log('Mongo connect function err :>> ', err.stack);
        process.exit(1);
    }
}


export {
    connect
};

// admin : 70WZDS0JBN7ihfoc