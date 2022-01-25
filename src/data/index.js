
var request = require('request');

var url = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period';
var queryParams = '?' + encodeURIComponent('serviceKey') + 'CrKLRo9pEvAeiF%2FhQrj%2Fn8ztOim9YM%2F40R3%2FhzhHg0NWXrH%2Bipm7wNfEKOfUzK5Q%2B5OQV4zyxN5FyIIuAHbT6w%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent(''); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
    console.log(response.data)
});
