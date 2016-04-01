
var pMap = new pckr.Map('map', { center: new L.LatLng(49.211, 16.615), zoom: 16} );

var map =  pMap.getMap();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var controlBar = L.control.bar('bar',{
    position:'top',
    visible:true
}).addTo(map);


var win =  L.control.window(map,{title:'Twitter login',content:$('#login').show().html()})
    .prompt({callback:function(){alert('This is called after OK click!')}});

$('#loginBtn').on('click',function () {
    win.show()
});