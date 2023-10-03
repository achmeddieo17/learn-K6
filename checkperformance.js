import http from 'k6/http'
import { check } from 'k6'

export default function () {
	const res = http.get('https://www.mobbi.id/')

	check(res, {
		'responsenya harus 200': (r) => r.status === 200,
	})
}

