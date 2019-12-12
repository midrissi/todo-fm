/* eslint-disable import/no-dynamic-require */
const request = require('supertest');
const { resolve } = require('path');
const { model, connection } = require('mongoose');
const {
  it,
  before,
  describe,
  afterEach,
} = require('mocha');

const User = model('User');

const { createUser } = require(resolve('helpers/utils'));

const express = require(resolve('./config/lib/express'));
const { prefix } = require(resolve('config'));

let app;
const credentials = {
  username: 'username',
  password: 'jsI$Aw3$0m3',
};
let agent;

/**
 * Sections tests
 */
describe('tests for module "todo"', () => {
  before(async () => {
    // Get application
    app = await express.init(connection.db);
    agent = request.agent(app);
  });

  describe('"todo" is up', () => {
    it('I am not allowed to call the API if I do not have the IAM "modules:todo:list"', async () => {
      await createUser(credentials, []);
      await agent.post('/api/v1/auth/signin').send(credentials).expect(200);
      await agent.get(`${prefix}/todo`).expect(403);
    });

    it('I am allowed to call the API if I have the IAM "todo:ok"', async () => {
      await createUser(credentials, [
        'modules:todo:list',
      ]);
      await agent.post('/api/v1/auth/signin').send(credentials).expect(200);
      await agent.get(`${prefix}/todo`).expect(200);
    });
  });

  afterEach(async () => {
    await Promise.all([
      User.remove(),
    ]);
  });
});
