const thresholds = {
        http_req_failed: ['rate<0.01'], 
        http_req_duration: ['p(90)<10000'], 
        http_req_receiving: ['max<300'],
}

export default thresholds
