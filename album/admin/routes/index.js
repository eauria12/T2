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

router.post('/mostrar_saldos_inventario', async function (req, res, next) {
  let data = Object.assign({}, req.body);

  res.redirect('/home');
});


router.get('/home', async function (req, res, next) {
  let token = "Bearer " + req.session.token;
  const Url_Validacion_Seguridad = 'http://oasysweb.saia.com.ec/andina/api/seguridad/nivel/080509';
  const Url_Lista_Locales = 'http://oasysweb.saia.com.ec/andina/api/info/local/lista';
  const Url_Lista_lineas = 'http://oasysweb.saia.com.ec/andina/api/info/linea/lista';
  const response_seguridad = await axios.get(Url_Validacion_Seguridad, {headers: {'Authorization': token}});
  const response_locales = await axios.get(Url_Lista_Locales, {headers: {'Authorization': token}});
  const response_lineas = await axios.get(Url_Lista_lineas, {headers: {'Authorization': token}});
  let Respuesta_Accesos = response_seguridad.data;
  let Lineas_Autorizado = Respuesta_Accesos[0].lineas;
  let Locales_Autorizado = Respuesta_Accesos[0].locales;
  let Respuesta_Locales = response_locales.data;
  let Respuesta_Lineas = response_lineas.data;

  res.render('Saldo_Inventario', {title:"Saldo de Inventario", Lineas: Lineas_Autorizado , Locales: Locales_Autorizado, Completo_Lineas: Respuesta_Lineas, Completo_Locales: Respuesta_Locales});
});


module.exports = router;
