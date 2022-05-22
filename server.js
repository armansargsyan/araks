const express = require('express');
const app  = express();
const PORT = process.env.PORT || '3000';

app.use(express.static('dist/diplom'));

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
});
