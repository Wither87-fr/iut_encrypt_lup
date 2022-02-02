const crypto = require("crypto")

module.exports = {
    sha1: function(unencryptedPassword) {
        let shasum = crypto.createHash("sha1")
        shasum.update(unencryptedPassword);
        return shasum.digest().toString("base64")
    },
    compareSha1: function(toVerify, shaString) {
        let shasum = crypto.createHash("sha1")
        shasum.update(toVerify);
        let encrypted = shasum.digest().toString("base64")
        return encrypted === shaString
    }
}
