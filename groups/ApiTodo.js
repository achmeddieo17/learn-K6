import { group } from "k6"
import http from "k6/http"
import generateHeaders from "../utils/generateHeaders.js"
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';



export default function withLogin (token) {
	
	const payload = JSON.stringify({
		todo: 'Use DummyJSON in the project',
		completed: false,
		userId: 5,
	})
	const payload1 = 
		JSON.stringify({
			completed: false,
		})
	const payload2 =JSON.stringify({
	})
	describe('Tes Api Todo', function() {
        const resLogin = http.get('https://dummyjson.com/auth/product/1', generateHeaders(token))
        expect(resLogin.status, 'status').to.equals(200)
        
        const res1 = http.get('https://dummyjson.com/auth/todos', generateHeaders(token))
        expect(res1.status, 'status all todos').to.equals(200)

        const res2 = http.get('https://dummyjson.com/auth/todos/1', generateHeaders(token))
        expect(res2.status, 'status single todos').to.equals(200) 

        const res3 = http.get('https://dummyjson.com/auth/todos/random', generateHeaders(token))
        expect(res3.status, 'status random todos').to.equals(200)   

        const res4 = http.get('https://dummyjson.com/todos?limit=3&skip=10', generateHeaders(token))
        expect(res4.status, 'status limit and skip').to.equals(200)

        const res5 = http.get('https://dummyjson.com/auth/todos/user/5', generateHeaders(token))
		// console.log(res5)
        expect(res5.status, 'status all todos by user').to.equals(200)           

        const res6 = http.post('https://dummyjson.com/auth/todos/add', payload, generateHeaders(token))    
        expect(res6.status, 'status add').to.equals(200)        

        const res7 = http.put('https://dummyjson.com/auth/todos/1',payload1, generateHeaders(token))
        expect(res7.status, 'status update').to.equals(200)

        const res8 = http.del('https://dummyjson.com/auth/todos/1', payload2 ,generateHeaders(token))
        expect(res8.status, 'status delete').to.equals(200)
        
    })
}