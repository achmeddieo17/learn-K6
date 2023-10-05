import http from 'k6/http'

export function setup() {
    console.log('setup')
    const url = 'https://dummyjson.com/auth/login'

    const payload = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    })

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

export default function(data) {
    console.log('data')
    http.post('https://dummyjson.com/todos/1', {
        headers: {
            'Authorization':
        }
    })
}

export function teardown(bambang){
    console.log('teardown')
}