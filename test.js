import http from 'k6/http';
import {check} from 'k6';

export const options = {
    duration: '30s', // Duration of test
    vus: 10,    // virtual users to simulate
};

export default function () {
    // Send POST request to specified URL with payload (JSON Stringify) and headers (specify content type)
    const res = http.post('http://localhost:8081/request-registration', 
                            JSON.stringify({"email": "test1@example.com"}), 
                            {headers: {
                                        'Content-Type': 'application/json',
                                        },
                                    });

    check(res, {
        // Assert that response status is 204 (no content)
        'is status 204': (r) => r.status === 204,
    });
}