import { BASE_ENDPOINT } from "../endpoint";

export const deleteMembershipPlan = async (token, id) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/api/v1/plans/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        if (!response.ok) {
            console.error('Error:', res);
            throw new Error(res.message);
        }
        return res.data;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};