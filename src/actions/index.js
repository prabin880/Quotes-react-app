export const next = (payload) => ({
    type: 'NEXT',
    payload: payload[Math.floor(Math.random() * Math.floor(10))]
});
