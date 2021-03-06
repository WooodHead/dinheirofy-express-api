const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
	swaggerDefinition: {
		// Like the one described here: https://swagger.io/specification/#infoObject
		info: {
			title: 'Dinheirofy Express API'
			// version: '1.0.0',
			// description: 'Dinheirofy Express API with autogenerated swagger doc.'
		}
	},
	// List of files to be processes. You can also set globs './routes/*.js'
	apis: ['./app/routes/*.js', './app/models/*.model.js']
};

const swaggerDocument = swaggerJsdoc(options);

module.exports = (app) => {
	app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
