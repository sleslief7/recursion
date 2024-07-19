const fibs = (l) => {
  let seq = [0, 1];

  if (l <= 2) return seq.slice(0, Math.max(0, l));

  for (let i = 2; i < l; i++) {
    let next = seq[i - 2] + seq[i - 1];
    seq.push(next);
  }
  return seq;
};

//console.log(fibs(8));

const fibsRec = (l) => {
  let firstSec = [0, 1];
  if (l <= 2) return firstSec.slice(0, Math.max(0, l));

  let lastSec = fibsRec(l - 1);
  lastSec.push(lastSec.at(-2) + lastSec.at(-1));
  return lastSec;
};
//console.log(fibsRec(8));

const fibsRec2 = (l) => {
  if (l <= 1) return 0;
  if (l === 2) return 1;
  return fibsRec2(l - 2) + fibsRec2(l - 1);
};
//console.log(fibsRec2(8));
