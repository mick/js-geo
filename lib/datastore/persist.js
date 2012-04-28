var adaptors = {"postgis":require("./postgis.js").Postgis,
                "couchdb":require("./couchdb.js").CouchDB
               };

var persist = function(options){
    
    this.adaptor = new adaptors[options.adaptor](options.connection, options);

    this.remove = this.adaptor.remove;
    this.filter = this.adaptor.filter;
    
    this.options = options;
}


persist.prototype = {

    constructor:persist,
    table:null,
    save:function(obj){
        this.adaptor.save(obj, this.table);
    },
    remove:function(){},
    filter:function(){}
}

exports.persist = persist;
