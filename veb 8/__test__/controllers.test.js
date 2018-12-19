const controllers = require('../controllers/controllers');
const services = require('../services/services');

describe("testing all controllers", () => {

    test("checking id controller", () => {
        const send = jest.fn();
        const req = { query: { id: 445651 } };
        const res = { send };

        controllers.id(req, res);

        expect(send.mock.calls).toHaveLength(1);
        expect(send).toBeCalledWith(services.getById(445651));
    });


    test("checking name controller", () => {
        const send = jest.fn();
        const req = { query: { name: 'Darkest' } };
        const res = { send };

        controllers.search(req, res);

        expect(send).toBeCalledWith(services.getByName('Darkest'));
    });

    test("checking pagination controller", () => {
        const send = jest.fn();
        const req = { query: { offset: 1, limit: 10 } };
        const res = { send };

        controllers.pagination(req, res);

        expect(send.mock.calls.length).toBe(1);
        expect(send).toBeCalledWith(services.pagination(req.query.offset, req.query.limit));
    });

    test("checking sort by id", () => {
        const send = jest.fn();
        const req = {
            query: { field: "id", type: 'u' }
        };
        const res = { send };

        controllers.sort(req, res);

        expect(send.mock.calls.length).toBe(1);
        expect(send).toBeCalledWith(services.sort(req.query.field, req.query.type));
    });

});