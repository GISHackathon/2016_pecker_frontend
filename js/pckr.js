var pckr = {
    version: '0.1.0'
};

// MAP object
pckr.Map = function(querySelector,options) {

    this._map = new L.Map(querySelector, options);

};

// leaflet map
pckr.Map.prototype._map;

pckr.Map.prototype.getMap = function(){
    return this._map;
};

// configuration
pckr.Config = function(conf) {

    this_._server = conf['server'];

};

// api baseurl
pckr.Config.prototype._server = null;

