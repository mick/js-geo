exports.Line = function(_super){

    var Line = function(points, options){
        this.points = points || [];
        this._super = _super;
    }

    Line.prototype = {
        constructor: Line,
        attributes:{},
        toGeoJSON:function(){
            var coords = []
            for(p in this.points){
                coords.push([this.points[p].lng, this.points[p].lat])
            }
            return{type:"LineString", 
                   coordinates:coords}
        },
        toWKT:function(){
            var wkt = "LINESTRING ( "
            for( p in this.points){
                wkt +=this. points[p].lng +" "+ this.points[p].lat +", "

            }
            wkt = wkt.substr(0, wkt.length-2)
            return wkt + ")"
        },
        addPoint:function(point){
            this.points.push(point)
        },
        intersects:function(){},
        bounds:function(){},
        save:function(){
            this._super.persist.save(this);
        },
        srid:""
    }

    return Line;
}

