/* register the modules the application depends upon here*/
angular.module('postings', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('blogApp', ['postings']);
