var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */

router.get('/', async function (req, res, next) {

  res.render('login', { error: '' });

});

router.post('/login', async function (req, res, next) {
  let data = Object.assign({}, req.body);
  data.equipoIP = "";
  data.equipoNombre = "RALCIVAR";
  data.empresaId = 1;

  const URL = 'http://oasysweb.saia.com.ec/andina/api/seguridad/acceso/login'
  try {
    const response = await axios.post(URL, data);
    let respuesta_JWT = (response.data);
    if (respuesta_JWT.success == true) {
      req.session.token = respuesta_JWT.result;
      console.log(respuesta_JWT.token);
      res.redirect('/home');
    }
    else {
      res.render('login', { error: 'Error en Las credenciales entregadas' });
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('login', { error: 'Error en Las credenciales entregadas' });
    } else {
      console.log('Error:', error.message);
    }
  }
});


router.get('/home', async function (req, res, next) {
  console.log(req.session.token);
  let token = "Bearer " + req.session.token;
  console.log(token);
  const URL = 'http://oasysweb.saia.com.ec/andina/api/seguridad/nivel/080509';
  const response = await axios.get(URL, {
    headers: {
      'Authorization': token
    }
  });
  let Respuesta_Accesos = response.data;

  res.render('Saldo_Inventario', { title: 'Express' });
});


module.exports = router;
