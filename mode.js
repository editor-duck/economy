var alinks = {
  setAColor:function(color){
      var alist = document.querySelectorAll('a');
      var i =0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
    }
  }
}
var Body = {
  setBodyColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBGBodyColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}


function darkLightHandler(self){

  if(self.value ==='dark'){
      Body.setBodyColor('white');
      Body.setBGBodyColor('black');
      document.querySelector('ol').style.color = 'white';
      document.querySelector('ol').style.borderRightColor = 'white';
      document.querySelector('img').style.filter = 'invert(100%)';
      document.querySelector('h1').style.borderBottomColor='white';
      self.value ='light';
      self.style.color = 'white';
      self.style.backgroundColor = 'black';

      alinks.setAColor('white');
      }

  else{
      Body.setBodyColor('black');
      Body.setBGBodyColor('white');
      document.querySelector('ol').style.color = 'black';
      document.querySelector('ol').style.borderRightColor = 'black';
      document.querySelector('img').style.filter = 'invert(0%)';
      document.querySelector('h1').style.borderBottomColor='black';
      self.value ='dark';
      self.style.color = 'black';
      self.style.backgroundColor = 'white';
      alinks.setAColor('black');
  }
}
