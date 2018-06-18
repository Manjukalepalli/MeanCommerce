const path = require('path');

const router = require('express').Router();

router.all('*', function(request, response, next) {
    console.log('got to the catch-all route')
    response.sendFile(path.resolve('./dist/commerce/index.html'))
})

module.exports = router;
