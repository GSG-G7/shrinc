const app = require('./app');

const port = app.get('port');


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at http://localhost:${port}`);
});
