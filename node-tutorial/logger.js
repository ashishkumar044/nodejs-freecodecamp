
const log = (message) => {
    console.log(message);
};

module.exports.log = log  //Export as object
module.exports = log  //Export as function