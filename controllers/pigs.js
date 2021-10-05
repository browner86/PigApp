const { randomInt } = require('crypto');
const Pig = require('../models/pigs')

exports.getIndex = (req, res, next) => {
   res.render('index',{
    pageTitle: 'Pigs',
    pageH1: 'Pigs'
   });
}

exports.getAddPig = (req, res, next) => {
    res.render('add-pig', {
      pageTitle: 'Add Pig',
      pageH1:'Add New Pig',
      path: '/addPig',
      editing: false
    });
  };

  exports.postAddPig = (req, res, next) => {
   
    const name = req.body.name;
    const id = randomInt(100);
    const description = req.body.description;
    
    
    const pig = new Pig(id, name, description);
    pig.save();
    res.redirect('/');
  };

//     Pig.fetchAll(pigs => {
//       res.render('/index', {
//         pigs: pigs,
//         pageTitle: 'Pigs',
//         path: '/'
//       });
//     });
//   };
  