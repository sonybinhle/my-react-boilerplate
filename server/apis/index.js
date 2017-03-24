import express from 'express';

const indexApi = express.Router();

indexApi.get('/api', (req, res) => {
  res.send({
    message: 'I am api',
  });
});

export default indexApi;
