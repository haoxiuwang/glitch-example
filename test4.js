function findChar(words, char) {
  var i = 0;
  var len = words.length;
  var counts = [];
  while (i < len) {
    if (words[i] === char) {
      counts.push(i);    
    }
    i++;
  }
  return counts;
}

var article = `While this was doing, I was not altogether careless of my other affairs; for I had a great concern upon me for my little herd of goats: they were not only a ready supply to me on every occasion, and began to be sufficient for me, without the expense of powder and shot, but also without the fatigue of hunting after the wild ones; and I was loath to lose the advantage of them, and to have them all to nurse up over again.`;

var result1 = findChar(article, "l");
console.log(result1);
