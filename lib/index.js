//Let export some things.
var persist = require("./datastore/persist.js").persist
var geo = function(options){

    if(options.adaptor){
        this.persist = new persist(options);

        if(options.table)
            this.persist.table = options.table;
    }

    this.geoms =  {Point:require("./geometries/point.js").Point(this),
                   Line:require("./geometries/line.js").Line(this)};
}


geo.prototype = {
    constructor: geo,
    persist:null,

};

exports.geo = geo;

