import { Router } from 'express';
 
const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByUsername(
    req.params.userId,
  );
  return res.send(user);
});
 
router.post('/', async (req, res) => {
  const user = await req.context.models.User.create( req.body );
 
  return res.send(user);
});

export default router;
