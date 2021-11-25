import express from 'express';

const router = express.Router();

router.use('/', (req, res, next) => {
  res.status(404).json({error: 'page not found'});
});

export default router;
