// https://leetcode.cn/problems/minimum-window-substring/description/
function minWindow(s: string, t: string): string {
  const map: any = {};
  for (const c of t) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  let left = 0,
    right = 0,
    count = Object.keys(map).length,
    minLen = Infinity,
    windowLeft = 0;
  while (right < s.length) {
    const char = s[right];
    if (map[char] !== undefined) {
      map[char]--;
      if (map[char] === 0) count--;
    }
    right++;
    while (count === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        windowLeft = left;
      }
      const char = s[left];
      if (map[char] !== undefined) {
        map[char]++;
        if (map[char] > 0) count++;
      }
      left++;
    }
  }
  return minLen === Infinity
    ? ""
    : s.substring(windowLeft, windowLeft + minLen);
}

const run = () => {
  const s = "ADOBECODEBANC",
    t = "ABC";
  console.log(minWindow(s, t));
};
export default run;
