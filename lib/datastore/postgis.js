var pg = require("pg")

var postgisAdaptor = function(connectionString, options){
    this.connectionString = connectionString
    this.options = options
    this.connect();
}

postgisAdaptor.prototype = {
    constructor: postgisAdaptor,
    connect:function(){
        var self = this;
        console.log("CONNECT");
        pg.end();
        
        this.client = new pg.Client(this.connectionString);
        this.client.connect();

        this.client.on("error", function(){
            console.log("ERROR: hmm what to do with it here..")
        });
    },
    save:function(obj, table){
        console.log("SAVING")

        var values = [],
            fields = "",
            value_placeholders="";            
        if(obj.attributes){
            var c = 2
            for(a in obj.attributes){
                fields += ", "+a
                value_placeholders += ", $"+c
                if(obj.attributes[a] instanceof Date)
                    values.push(obj.attributes[a].toUTCString())
                else
                    values.push(obj.attributes[a])
                c +=1
            }
        }

        var query = this.client.query({
            name: 'insert '+table+" "+fields,
            text: "INSERT INTO "+table+"(geom"+fields+
                ") values(ST_GeomFromText($1)"+value_placeholders+")",
            values: [obj.toWKT()].concat(values)
        })
        
        query.on("end", function(something){
            console.log("query ended.. guess it inserted", something)
        })


    },
    remove:function(){},
    filter:function(){}

}

exports.Postgis = postgisAdaptor