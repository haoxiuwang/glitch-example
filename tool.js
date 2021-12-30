function findAllChar(words, char) {
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

function charFind(words, char, from) {
  var len = words.length;
  var i = from;
  while (i < len) {
    if (words[i] == char) {
      return i;
    }
    i++;
  }
  return -1;
}

function compareStr(str1, from1, str2, from2, len) {
  var i = 0;
  while (i < len) {
    if (str1[from1 + i] !== str2[from2 + i]) {
      return 0;
    }
    i++;
  }
  return 1;
}

function findWords(strSource, strFind, from) {
  var char = strFind[0];
  var i = from;
  var r = -1;
  var len1 = strSource.length;
  var len2 = strFind.length;
  while (i < len1 - len2) {
    r = charFind(strSource, char, i);

    if (r == -1) return -1;

    if (compareStr(strSource, r, strFind, 0, len2)) {
      return r;
    }
    i = r + 1;
  }
  return -1;
}

function findAllWords(str1, str2) {
  var i = 0;
  var l1 = str1.length;
  var l2 = str2.length;
  var r = -1;
  var arr = [];
  while (i < l1 - l2) {
    r = findWords(str1, str2, i);
    if (r == -1) {
      return arr;
    }

    arr.push(r);
    i = r + l2;
  }
  return arr;
}

module.exports = {
  findAllChar,
  charFind,
  compareStr,
  findWords,
  findAllWords
};
