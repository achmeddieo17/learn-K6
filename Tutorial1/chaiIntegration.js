import http from 'k6/http'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';


export default function (){
    describe('test api dashboard mobbi', function() {
        const res = http.get('https://www.mobbi.id/')

        expect(res.status, 'status').to.equals(200)
    })
}
