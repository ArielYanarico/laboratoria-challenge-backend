import { Router } from 'express';
 
const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.users);
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});
 
router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

export default router;
