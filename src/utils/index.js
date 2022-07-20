class Movie{

    constructor(title, actor = 'Not Specified'){this.title = title; this.actor = actor;}

    async add(collection){await collection.insertOne(this);}

    async updateOne(collection, updates){await collection.updateOne(this, {$set:{updates},});}

    async deleteOne(collection, yargsObj) {
        const filterObj = {};
        if (yargsObj.title === 'null') {filterObj.title = null;};
        if (yargsObj.actor === 'null') {filterObj.actor = null;};
        await collection.deleteOne(filterObj);}

            }

module.exports = Movie;


// {$set:{actor: 'Mark Hamil'},};
// {$set:{title: this.newTitle}
// {title: this.title},
//         {$set:{title: this.newTitle},},


// {actor: this.actor},