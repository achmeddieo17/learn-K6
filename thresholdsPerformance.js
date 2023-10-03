import http from 'k6/http'

export const options = {
	vus: 50,
	duration: '60s',
 
 
	thresholds: {
	  http_req_failed: ['rate<0.001'], 
	  http_req_duration: ['p(90)<20000'], 
	  iterations: ['count > 400'], 
	 },
 };

export default function () {
	http.get('https://www.mobbi.id/')
}