import VueCookies from 'vue-cookies'

import { api } from './axios';
import jwt_decode from 'jwt-decode';

const refreshAuthenticated = async () => {
  let decode = [];
  
  if (
    VueCookies.get('refreshToken') != undefined &&
    VueCookies.get('refreshToken') != 'undefined'
  ) {
    await api
      .post('/api/token/refresh', {
        refreshToken: VueCookies.get('refreshToken'),
      })
      .then((response) => {
        console.log('nous effectuons le refresh token', response.data);
        api.defaults.headers.common['Authorization'] =
          'Bearer ' + String(response.data.token);
        VueCookies.set('token', String(response.data.token));
        VueCookies.set('refreshToken', String(response.data.refreshToken));
        decode = jwt_decode(String(response.data.token));
        VueCookies.set('nom', String(decode.nom));
        VueCookies.set('prenom', String(decode.prenom));
        VueCookies.set('phone', String(decode.phone));
        VueCookies.set('id', String(decode.id));
    
        console.log(decode.roles[1] == 'ROLE_ADMIN');
    
        if (decode.roles[1] == 'ROLE_ADMIN') {
          VueCookies.set('admin', '1');
        } else {
          VueCookies.set('admin', '0');
        }

        console.log(VueCookies.get('admin')); // VueCookies.set('decode', this.decode);

        console.log(VueCookies.get('id'));
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
 

export { refreshAuthenticated };
