/**
  Write a program to check whether the 2 given strings are anagram or not
  LEVEL - EASY
  done using javascript maps
**/

function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = {};
    const tMap = {};
    for(let i = 0; i < s.length;i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] = 1;
        }
        if (tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    for (const k in sMap) {
        if (sMap[k] !== tMap[k]){
            return false;
        }
    }
    return true;
};
