const path = require('path');

module.exports = (req,res,next) => {
    if (req.session.usuario != undefined && req.session.usuario.role >= 1){
       next();
    } else {
        res.render(path.resolve(__dirname, '..', 'views', 'web', 'accesoProhibido'));
    }
};