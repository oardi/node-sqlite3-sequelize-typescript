import { Post } from './models/Post';
import { Comment } from './models/Comment';
import { initDB } from './sequelize';

initDB()
	.then(async () => {
		try {
			const p = await Post.create({ title: 'Post 1', body: 'lorem ipsum lorem ipsum' })
			const c = await Comment.create({ title: 'Comment 1 for Post 1', body: 'lorem ipsum' })
			await p.$add('comment', c);
		} catch (err) { console.error(err) }
	})
	.catch(err => console.error(err));
