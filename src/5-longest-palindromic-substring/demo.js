
// var s = "cllc+-*/cllc";
var s = "cltgasdfgtlcmyvvy";

// var s = 'abcdc'

var map = [];
var r = s.split('').reverse().join('');
// console.log(s);
// console.log(r);

// build map
for (var i = 0; i < s.length; i++) {
  for (var j = 0; j < s.length; j++) {
    if (map[i] === undefined) {
      map[i] = [];
    }
    map[i][j] = s[i] === r[j];
//     console.log(i+' '+j+' '+s[i]+' '+r[j]+' '+map[i][j]);
  }
}

// render map
var html = [];


html.push('<tr>');
html.push('<td>','</td>');
for (var j = 0; j < s.length; j++) {
  html.push('<td>', r[j],'</td>');
}
html.push('</td>');


for (var i = 0; i < s.length; i++) {
  html.push('<tr>');
  
  html.push('<td>', s[i], '</td>');
  
  for (var j = 0; j < s.length; j++) {
    var center = i === j ? 'center' : '';
    if (map[i][j]) {
      html.push('<td class="success ', center, '">', 1,'</td>');
    } else {
      html.push('<td class="fail ', center, '">', 0,'</td>');
    }
  }
  html.push('</td>');
}

$('tbody').append(html.join(''));