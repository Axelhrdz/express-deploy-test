export const healthService = {
    check: async () => {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
        };
    }
};