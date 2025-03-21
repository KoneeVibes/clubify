import { BASE_ENDPOINT } from "../endpoint";

export const bookFacility = async (token, facilityDetails) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/api/v1/facilities/book`, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(facilityDetails)
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
