import { BASE_ENDPOINT } from "../endpoint";

export const signinUser = async (action, signinDetails) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/auth/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authDetails)
        });
        const res = await response.json();
        if (!response.ok) {
            console.error('Error:', res);
            throw new Error(res.message);
        }
        return res;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};