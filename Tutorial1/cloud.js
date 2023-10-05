import http from 'k6/http'
import { check } from 'k6'

export const options = {
	stages: [
		{ duration: '5s', target: 100 },
		{ duration: '10s', target: 100 },
		{ duration: '10s', target: 50 },
		{ duration: '5s', target: 0 },

	],
    thresholds: {
        http_req_failed: ['rate<0.001'], 
        http_req_duration: ['p(90)<20000'], 
        http_req_receiving: ['max<10000'],
        // iterations: ['count > 400'], 
       },
}

export default function () {
	const res = http.get('https://www.mobbi.id/')

    check(res, {
		'responsenya harus 200': (r) => r.status === 200,
	})
    
}
//cara jalaninnya diterminal $ k6 run --out cloud cloud.js
