// const {getMessage} = require('./message');
import getMessage from './message.js';
import { fetchArticles, authUser } from './api.js';
import * as API from './api.js';

console.log(getMessage());
console.log(API);
fetchArticles();
authUser();