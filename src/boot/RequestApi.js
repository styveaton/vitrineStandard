
import { api } from './axios'; 
 export  class RequestApi  {
  
  
// constructor( ) {
//     this.clientId =  VueCookies.get('id');
//     this.number =  VueCookies.get('phone');
//   this.keySecret = VueCookies.get('keySecret');
//   this.toast =createToaster();
// }
 
  
  


  getVitrineInfo = async (vitrine ) => {
     let dataRes  = { status: true, data: [] };
    const data = {
      vitrine: vitrine,
    };
    console.log(data);
    await api
      .post('/vitrine/user', data)
      .then((response) => {
        //console.log('');
        dataRes = {
          status: true,
          data: response.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    return dataRes;
  };  
}
 