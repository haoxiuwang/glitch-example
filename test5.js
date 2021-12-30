var tool = require('./tool')

var find = tool.findAllChar
var find1 = tool.charFind

var article = `While this was doing, I was not altogether careless of my other affairs; for I had a great concern upon me for my little herd of goats: they were not only a ready supply to me on every occasion, and began to be sufficient for me, without the expense of powder and shot, but also without the fatigue of hunting after the wild ones; and I was loath to lose the advantage of them, and to have them all to nurse up over again.`;

var result1 = find(article, "l");
console.log(result1);

result1 = find(article, "u");
console.log(result1);

result1 = find1(article,'u',30)
console.log(result1)