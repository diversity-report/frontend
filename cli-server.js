'use strict';
require('express')().use(require('express').static('build'))
.listen(8080, () => {console.log('cli-server 8080 listening..');});
