const fs = require('fs')
const util = require('util')

class Writer{
    constructor(options){
        this.write = util.promisify(fs.writeFile)
    }

    async Write(filename, data){
        try{
            return await this.write(filename, data)
        }catch(err){
            console.log(err)
        }
    }
}


module.exports = Writer