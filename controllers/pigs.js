const Pig = require('../models/pigs')

exports.getIndex = (req, res, next) => {
   res.render('index',{
    pageTitle: 'Pigs',
    pageH1: 'Pigs'
   });
}
//     Pig.fetchAll(pigs => {
//       res.render('/index', {
//         pigs: pigs,
//         pageTitle: 'Pigs',
//         path: '/'
//       });
//     });
//   };
  