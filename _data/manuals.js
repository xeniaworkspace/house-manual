const csv   = require('csvtojson');
const fetch = (...a) => import('node-fetch').then(({default:f}) => f(...a));

module.exports = async () => {
  const raw = await (await fetch(process.env.SHEET_URL)).text();
  return csv().fromString(raw);
};
