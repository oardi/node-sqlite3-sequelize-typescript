import { Model, Table, HasMany, Column } from 'sequelize-typescript';
import { Comment } from './Comment';

@Table
export class Post extends Model {
	@Column
	title!: string;

	@Column
	body!: string;

	@HasMany(() => Comment)
	comments?: Comment[];
}
