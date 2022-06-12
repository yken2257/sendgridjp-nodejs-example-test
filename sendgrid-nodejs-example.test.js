const send = require('./sendgrid-nodejs-example');

test('send/mail returns 202', async () => {
    const result = await send();
    expect(result).toBe(202);
  });