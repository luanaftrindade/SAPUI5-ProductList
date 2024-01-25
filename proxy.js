// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8082;
 
import { createServer } from './cors-anywhere';
createServer({
    originWhitelist: [], // Allow all origins    
    requireHeader: ['Origin', '*'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});