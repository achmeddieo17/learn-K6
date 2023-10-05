import http from 'k6/http'

export const options = {
    scenarios: {
      shared_iter_scenario: {
        executor: "shared-iterations",
        vus: 100,
        iterations: 200,
        startTime: "0s",
        gracefulStop: '25s'
      },
      per_vu_scenario: {
        executor: "per-vu-iterations",
        vus: 100,
        iterations: 10,
        startTime: "10s",
        gracefulStop: '20s'
      },
    },
   thresholds: {
      http_req_failed: ['rate<0.001'], // the error rate must be lower than 0.1%
      http_req_duration: ['p(90)<600'], // 90% of requests must complete below 600ms
      http_req_receiving: ['max<150'], // slowest request below 150ms
      iteration_duration: ['p(95)<20000'], // 95% of requests must complete below 20000ms
     },
   };

   export default function () {
	    http.get('https://www.mobbi.id/')
}