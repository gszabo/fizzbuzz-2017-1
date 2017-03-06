'use strict';

const app = require('./endpoints/list');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Server listening...');
})
