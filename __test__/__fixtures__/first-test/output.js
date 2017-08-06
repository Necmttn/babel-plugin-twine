import { getgame } from '../../../readFile.js';

getgame('../../resources/mimir.html').then(game => {
   console.log(game);
}).catch(err => {
   console.log(err);
});
