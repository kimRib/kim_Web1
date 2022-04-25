function 밤낮바꾸기(self) {
  var target = document.querySelector('body');
if (self.value === '밤 모드') {
  target.style.backgroundColor='black';
  target.style.color='white';
  self.value = '낮 모드';

  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = 'green';
    i = i + 1;
  }
} else {
  target.style.backgroundColor='white';
  target.style.color='black';
  self.value = '밤 모드';

  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = 'blue';
    i = i + 1;
  }
}
}
