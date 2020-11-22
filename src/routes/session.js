import { Router } from 'express';
 
const router = Router();

router.get('/session', (req, res) => {
  return res.send(req.context.models.users[req.me.id]);
});

export default router;
