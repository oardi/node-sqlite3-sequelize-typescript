import { Model, Table, Column, ForeignKey, Scopes } from 'sequelize-typescript';
import { Post } from './Post';

@Scopes(() => ({
	cast: {
		include: [{
			model: Post,
			through: { attributes: [] },
		}]
	}
}))
@Table
export class Comment extends Model {
	@ForeignKey(() => Post)
	@Column
	postId!: number;

	@Column
	title!: string;
	@Column
	body!: string;
}
