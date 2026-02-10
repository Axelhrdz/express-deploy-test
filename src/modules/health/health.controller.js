import { healthService } from './health.service';

export const healthController = {
    check: async (req, res) => {
        const health = await healthService.check();
        res.json(health);
    }
};