import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.sqlite',
	models: [__dirname + '/models']
});

export function initDB() {
	return new Promise((resolve, reject) => {
		sequelize
			.sync()
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
}
