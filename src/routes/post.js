import { Router } from 'express';
 
const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.posts);
});
 
router.get('/:postId', (req, res) => {
  return res.send(req.context.models.posts[req.params.postId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const post = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };
 
  req.context.models.posts[id] = post;
 
  return res.send(post);
});

router.put('/:postId', (req, res) => {
  const id = uuidv4();
  const {
    [req.params.postId]: post,
    ...otherPosts
  } = req.context.models.posts;

  post = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };
 
  req.context.models.posts = [post, ...otherPosts];
 
  return res.send(post);
});

router.delete('/:postId', (req, res) => {
  const {
    [req.params.postId]: post,
    ...otherPosts
  } = req.context.models.posts;
 
  req.context.models.posts = otherPosts;
 
  return res.send(post);
});

export default router;
