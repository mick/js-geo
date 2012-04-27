exports.Line = function(_super){

    var Line = function(points, options){
        this.points = points || [];
        this._super = _super;
    }

    Line.prototype = {
        constructor: Line,
        toGeoJSON:function(){
            return JSON.stringify({type:"LineString", 
                                   coordinates:this.points})
        },
        addPoint:function(){},
        intersects:function(){},
        bounds:function(){},
        save:function(){
            this._super.persist.save();
        },
        srid:""
    }

    return Line;
}

