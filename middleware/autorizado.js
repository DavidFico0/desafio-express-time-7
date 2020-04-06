function autorizado(req,res,next){
  if(typeof(req.session.usuario) != 'undefined'){
    next();
  }else{
    res.redirect('/users/formLogin');
  }
}

module.exports = autorizado;