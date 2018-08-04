import { GraphQLSchema } from 'graphql';
const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);

fetch('https://www.goodreads.com/author/show.xml?id=4432&key=UFScpw1SBAOKEQ5vaBbOjg')
	.then((response) => response.text())
	.then(parseXML);
