import { group, sleep } from 'k6'
import http from 'k6/http'

import thresholds from './config/thresholds.js'
import smoke_test from './config/smoke.js'
import average_load_test from './config/average.js'
import breakpoint_test from './config/breakpoint.js'
import spikes_test from './config/spike.js'
import stress_test from './config/stress.js'
import soak_test from './config/soak.js'

import getAuthToken from './utils/getAuthToken.js'

import withLogin from './groups/ApiTodo.js'
import withLogin1 from './groups/ApiProduct.js'

const scenarioList = {
	smoke: smoke_test,
	average: average_load_test,
    breakpoint: breakpoint_test,
    spikes: spikes_test,
    stress: stress_test,
    soak: soak_test
}

export const options = {
	thresholds,
	scenarios: {
		current_scenario: scenarioList[__ENV.SCENARIO] || smoke_test
	}
}

export function setup() {
	return getAuthToken()
}

export default function (token) {
	withLogin(token)
    withLogin1(token)

	sleep(1)
}