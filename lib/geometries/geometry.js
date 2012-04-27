var Geometry = function(){



};

Geometry.prototype = {
    constructor:Geometry,
    toGeoJSON:function(){
        // geoms should override this.
        return JSON.stringify({"whatsthis":"geojson!"})
    }

};