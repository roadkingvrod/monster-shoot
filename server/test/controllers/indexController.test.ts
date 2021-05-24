import request from 'supertest';
import { app } from '../../src/app';

describe('Test IndexController', () => {
  it('Should return status 200 and "Hello World"!', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello World');
  });

  it('Should return 404"!', async () => {
    const result = await request(app).get('/404').send();

    expect(result.status).toBe(404);
  });

  it('Should return exception', async () => {
    await request(app)
      .get('/oi')
      .catch((res) => {
        expect(res.status).toBe(404);
        expect(res.text).toBe('Hello World');
      });
  });
});
