const request = require('supertest');
const server = require('../server');

describe("Integration test", () => {
    test("GET /movies", done => {
        request(server)
            .get("/movies")
            .then(response => {
                const movies = response.body;

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
            });
        done();
    });

    test("GET /sort", done => {
        request(server)
            .get("/sort?field=id&type=u")
            .then(response => {
                const movies = response.body;

                for (let i = 0; i < movies.size - 1; i++) {
                    expect(movies[i].id < movies[i + 1].id).toBe(true);
                    expect(movies[i]).toHaveProperty('title');
                }

                done();
            });
    });


    test("GET /search", done => {
        request(server)
            .get("/search?name=Darkest")
            .then(response => {
                const movie = response.body;
                expect(movie).toHaveProperty('title', 'The Darkest Minds');
            });
        done();
    });


    test("GET /pagination", done => {
        request(server)
            .get("/page?offset=1&limit=5")
            .then(response => {

                const movies = response.body;

                expect(movies.length).toBe(5);

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

                done();
            });
    });
});