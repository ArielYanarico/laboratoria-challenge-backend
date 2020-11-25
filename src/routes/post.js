import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const posts = await req.context.models.Post.find();
  return res.send(posts);
});

router.get('/:postId', async (req, res) => {
  const post = await req.context.models.Post.findById(
    req.params.postId,
  );
  return res.send(post);
});

router.post('/', async (req, res) => {
  const post = await req.context.models.Post.create(req.body);

  return res.send(post);
});

router.put('/:postId', async (req, res) => {
  let post = await req.context.models.Post.findById(
    req.params.postId,
  );

  if (post) {
    await post.updateOne({ text: req.body.text, });
    post = await req.context.models.Post.findById(
      req.params.postId,
    );
  }

  return res.send(post);
});

router.delete('/:postId', async (req, res) => {
  const post = await req.context.models.Post.findById(
    req.params.postId,
  );

  if (post) {
    await post.remove();
  }

  return res.send(post);
});

export default router;
