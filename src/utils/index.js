class Movie{

    constructor(title, actor = 'Not Specified'){this.title = title; this.actor = actor;}

    async add(collection){await collection.insertOne(this);}

    async updateOne(collection){await collection.updateOne({$set:{title: this.title}}, {$set:{actor: this.actor}},);}

    async deleteOne(collection){await collection.deleteOne(this);}

            }

module.exports = Movie;


// {$set:{actor: 'Mark Hamil'},};