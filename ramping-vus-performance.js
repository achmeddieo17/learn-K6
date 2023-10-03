import http from 'k6/http'

export const options = {
	stages: [
		{ duration: '20s', target: 100 },
		{ duration: '15s', target: 90 },
		{ duration: '12s', target: 50 },
		{ duration: '10s', target: 30 },
		{ duration: '10s', target: 10 },

	],
    thresholds: {
        http_req_failed: ['rate<0.001'], 
        http_req_duration: ['p(90)<20000'], 
        http_req_receiving: ['max<10000'],
        iterations: ['count > 400'], 
       },
}

export default function () {
	http.get('https://www.mobbi.id/')
}