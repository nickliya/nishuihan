const axios = require('axios');

function axios_get(url, payload) {
  if(payload){
    axios.get(url, payload)
      .then(function (response) {
        this.console.log(response);
      })
      .catch(function (error) {
        this.console.log(error);
      });
  }else{
    axios.get(url)
      .then(function (response) {
        this.console.log(response);
      })
      .catch(function (error) {
        this.console.log(error);
      });
  }  

}
function axios_post(url, payload) {
  axios.post(url, payload)
    .then(function (response) {
      this.console.log(response);
    })
    .catch(function (error) {
      this.console.log(error);
    });
}
  
export default { 
  axios_get,
  axios_post 
};