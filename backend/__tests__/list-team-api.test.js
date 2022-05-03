const request = require("supertest");
const app = require('../app');


const runListTeamsApi = async () => {
    return await request(app).get("/team");
}
describe('List Team API Testcases', () => {

    it('should filter oute createdAt and updatedAt', async () => {
        const res = await runListTeamsApi();
        const teams = res.body;
        expect(
            teams.some(
                (team) =>
                    team.createdAt !== undefined || team.updatedAt !== undefined
            )
        ).toBeFalsy()
    })
    it('should be sorted by firstName', async () => {
        const res = await runListTeamsApi();
        const teams = res.body;
        const sortedTeams = teams.sort((a, b) => {
            if (a.firstName < b.firstName) return -1;
            if (a.firstName > b.firstName) return 1;
            return 0;
        })
        expect(teams).toEqual(sortedTeams);
    })
})
// Finished