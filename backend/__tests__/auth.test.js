const request = require('supertest');
const app = require('../server');

describe('Auth API', () => {
  test('User Registration', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
    });
    expect(res.statusCode).toBe(201);
  });

  // Add more tests for login and other functionalities
});
