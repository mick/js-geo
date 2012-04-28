var couch = require("couch")

var couchdbAdaptor = function(connectionString, options){
    this.connectionString = connectionString
    this.options = options
    this.c = couch(connectionString);
    this.connect();
}

couchdbAdaptor.prototype = {
    constructor: couchdbAdaptor,
    save:function(obj, table){
        console.log("SAVING")

        var doc = obj.attributes;
        doc.geometry = obj.toJSON
        this.c.post(doc, function (e, info) {
            if (e) throw e
        }
    },
    remove:function(){},
    filter:function(){}

}

exports.CouchDB = couchdbAdaptor