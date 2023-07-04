const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const euro = document.querySelector('#euro');

const convertator = (elem, target1, target2, isTrue) => {
  elem.addEventListener('input',() => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data.json');
    request.setRequestHeader('content-type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
      const response = JSON.parse(request.response);
      if(isTrue){
        target1.value = (elem.value / response.usd).toFixed(2);
        target2.value = (elem.value / response.euro).toFixed(2);
      }else{
        target1.value = (elem.value * response.usd).toFixed(2);
        target2.value = (elem.value * response.euro).toFixed(2);
      }
    });
  });
}

convertator(som, usd, euro, true);
convertator(usd, som, euro, false);
convertator(euro, usd, som, false);