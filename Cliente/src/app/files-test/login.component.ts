import axios from 'axios';
export class AppSideLoginComponent {
  constructor() {}
  async fetchAndCreatePost(usuario: string, local: number): Promise<string> {
    try {
      const body = {
        usuarioId: usuario,
        clave: 'ra2012',
        empresaId: 1,
        localId: local,
        equipoIP: '',
        equipoNombre: usuario,
      };
      const postResponse = await axios.post(
        'http://oasysweb.saia.com.ec/andina/api/seguridad/acceso/login',
        body
      );
      return 'Successfully authenticated';
    } catch (error) {
      return 'error';
    }
  }
}
