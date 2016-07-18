// var publicConfig = {
//     key: '<YOUR-KEY>',
//     stagger_time:       1000, // for elevationPath
//     encode_polylines:   false,
//     secure:             true, // use https
// };

// var gmAPI = new GoogleMapsAPI(publicConfig);

var matrixParams = {
    "url": "https://maps.googleapis.com/maps/api/distancematrix/json?origins=",
    "origin": "Rua Gomes de Carvalho, 638, Sao Paulo",    
    "destination": "Rua Quata, 300, Sao Paulo",
    "key": ""
};


// Builds the URL based on the information gathered
function buildURL(params) {
    return (params["url"] + params["origin"] + "&" +
            params["destination"] + "&" + params["key"]);
}

