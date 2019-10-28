const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.Airtable_KEY }).base(process.env.Base_ID);

module.exports = base;
