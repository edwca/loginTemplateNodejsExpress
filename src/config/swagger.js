const YAML = require('yamljs');
const path = require('path');
const _ = require('lodash');

const loginDoc = YAML.load(path.join(__dirname, '../../docs/login.yml'));
const usersDoc = YAML.load(path.join(__dirname, '../../docs/users.yml'));

// Combinar los documentos OpenAPI
const swaggerDocument = _.merge({}, loginDoc, usersDoc);

module.exports = swaggerDocument;
