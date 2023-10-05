import { group } from "k6"
import http from "k6/http"
import generateHeaders from "../utils/generateHeaders.js"
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export default function withLogin1 (token) {
	describe('Tes Api Product', function() {
        const resLogin = http.get('https://dummyjson.com/auth/product/1', generateHeaders(token))
        expect(resLogin.status, 'status').to.equals(200)
        
        const res1 = http.get('https://dummyjson.com/auth/products', generateHeaders(token))
        expect(res1.status, 'status all product').to.equals(200)

        const res2 = http.get('https://dummyjson.com/auth/product/1', generateHeaders(token))
        expect(res2.status, 'status single product').to.equals(200) 

        const res3 = http.get('https://dummyjson.com/auth/products/search?q=phone', generateHeaders(token))
        expect(res3.status, 'status search product').to.equals(200)   

        const res4 = http.get('https://dummyjson.com/auth/products?limit=10&skip=10&select=title,price', generateHeaders(token))
        expect(res4.status, 'status limit and skip').to.equals(200)

        const res5 = http.get('https://dummyjson.com/auth/products/categories', generateHeaders(token))
        expect(res5.json(), 'search').to.include('laptops')      

        const res6 = http.get('https://dummyjson.com/auth/products/category/smartphones', generateHeaders(token))
        expect(res6.status, 'status').to.equals(200)       

        const res7 = http.post('https://dummyjson.com/auth/products/add', {
            body: JSON.stringify({
                title: 'BMW Pencil',
            })
        }
        ,generateHeaders(token))            
        expect(res7.status, 'status add').to.equals(200)        

        const res8 = http.put('https://dummyjson.com/auth/products/1', {
            body: JSON.stringify({
            title: 'iPhone Galaxy +1'
            })
        }, generateHeaders(token))
        expect(res8.status, 'status update').to.equals(200)

        const res9 = http.del('https://dummyjson.com/auth/products/1', {
            body: JSON.stringify({
        }) 
        },generateHeaders(token))
        expect(res9.status, 'status delete').to.equals(200)
        
    })
}