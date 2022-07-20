const yargs = require('yargs');
const { client, connection} = require('./db/connection');
const Movie = require('./utils')

const app = async (yargsObj) =>{
    const collection = await connection();
    if (yargsObj.create){
        console.log('c');
        const newMovie = new Movie(yargsObj.title, yargsObj.actor);
        await newMovie.add(collection);
    }
    else if (yargsObj.read){
        console.log('r');
        const results = await collection.find().toArray();
        console.log(results);
    }
    else if (yargsObj.update){
        console.log('u'); 
        const updates = new Movie(yargsObj.title, yargsObj.actor);
        await updates.updateOne(collection);
    }
    else if (yargsObj.delete){
        console.log('d');
        const deletes = await collection.deleteOne(yargsObj.title, yargsObj.actor);
        deletes.deleteOne(collection);

    }
    else{console.log('Incorrect command');}
    await client.close();
}

app(yargs.argv);

