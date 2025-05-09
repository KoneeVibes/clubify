import { BASE_ENDPOINT } from "../endpoint";

export const uploadFile = async (token, fileDetails) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/api/v1/memberships/me`, {
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fileDetails)
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
