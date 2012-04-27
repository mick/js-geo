exports.Point = function(_super){
    console.log("super", _super);
    var Point = function(lat, lng, options){
        this.lat = lat
        this.lng = lng
        this.options = options
        this._super = _super
    }

    Point.prototype = {
        constructor: Point,
        toGeoJSON:function(){
            return JSON.stringify({type:"Point",
                                   coordinates:[this.lng, this.lat]})
        },
        toWKT:function(){
            return "POINT ("+this.lng+" "+this.lat+")"
        },
        save:function(){
            console.log("point save", this._super);
            this._super.persist.save(this);
        },
        srid:""
    }
    return Point
}

