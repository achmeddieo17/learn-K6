import http from 'k6/http'

export const options = {
	iterations: 20,
	vus: 2,
}

export default function () {
	const res = http.get('https://www.mobbi.id/')
}