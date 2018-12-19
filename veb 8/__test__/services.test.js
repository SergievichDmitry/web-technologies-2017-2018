const services = require('../services/services');

describe("cheking services functions", () => {
        test('getting film by id', () => {
            const movie = services.getById(445651);
            expect(movie.id).toBe(445651)
        });



        test('gettin film by name', () => {
            const movie = services.getByName("Darkest");

            expect(movie).toHaveProperty('title', 'The Darkest Minds');
        });



        test("pagination offset = 1  limit = 5", () => {
            const movies = services.pagination(1, 5);

            movies.forEach(movie => {
                expect(movie).toHaveProperty('release_date');
                expect(movie).toHaveProperty('overview');
                expect(movie).toHaveProperty('adult');
                expect(movie).toHaveProperty('backdrop_path');
                expect(movie).toHaveProperty('genre_ids');
                expect(movie).toHaveProperty('original_title');
                expect(movie).toHaveProperty('original_language');
                expect(movie).toHaveProperty('poster_path');
                expect(movie).toHaveProperty('popularity');
                expect(movie).toHaveProperty('title');
                expect(movie).toHaveProperty('vote_average');
                expect(movie).toHaveProperty('video');
                expect(movie).toHaveProperty('id');
                expect(movie).toHaveProperty('vote_count');
            });

            expect(Array.isArray(movies)).toBe(true);
            expect(movies.length).toBe(5);
        });



        test("sort field = id type = u", () => {

            const movies = services.sort('id', 'u');

            expect(Array.isArray(movies)).toBe(true);
            expect(movies.length).toBeGreaterThan(1);

            for (let i = 0; i < movies.size - 1; i++)
                expect(movies[i].id < movies[i + 1].id).toBe(true);
        });

        test("sort field = id order = d", () => {

            const movies = services.sort('id', 'd');

            expect(Array.isArray(movies)).toBe(true);
            expect(movies.length).toBeGreaterThan(1);

            for (let i = 0; i < movies.size - 1; i++)
                expect(movies[i].id > movies[i + 1].id).toBe(true);
        });

    test("sort field = title order = u", () => {

        const movies = services.sort('title', 'u');

        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBeGreaterThan(1);

        for (let i = 0; i < movies.size - 1; i++)
            expect(movies[i].title < movies[i + 1].title).toBe(true);
    });
});