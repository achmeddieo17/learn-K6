import http from 'k6/http'

export default function () {
    const res = http.get('https://www.mobbi.id/')
    // console.log(res.status)
	// console.log(res.json())
	// console.log(res.body)
	// console.log(res.headers)
	// console.log(res.timings)
}