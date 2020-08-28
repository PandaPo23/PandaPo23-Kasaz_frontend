const address = "http://127.0.0.1:3000/api/apartments?";    // Server Address

export default class Channel {
  constructor(options) {
    this.options = options
  }

  getListFromApi(param) {
    var paramString;
    if(param == undefined) {
      paramString = ''
    }
    else {
      paramString = JSON.stringify(param);
      paramString = paramString.replace(/:/g, '=');
      paramString = paramString.replace(/,/g, '&');
      paramString = paramString.replace(/"/g, '');
      paramString = paramString.substring(1, paramString.length - 1);
      console.log("ParamString", paramString);
    }
    return fetch(address + paramString, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(response => response.text())
      .then((data) => {
        return JSON.parse(data);
      })
      .catch((error) => {
        console.log("error", error)
        return null;
      });
  }
}
