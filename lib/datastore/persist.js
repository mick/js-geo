var adaptors = {"postgis":require("./postgis.js").Postgis};

var persist = function(options){
    
    this.adaptor = new adaptors[options.adaptor](options.connectionString, options);

    //this.save = this.adaptor.save;
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
