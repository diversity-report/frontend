'use strict';
require('express')().use(require('express').static('public'))
.listen(8080, () => {console.log('cli-server 8080 listening..');});
