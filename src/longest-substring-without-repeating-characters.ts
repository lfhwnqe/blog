// 3. 无重复字符的最长子串
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let i = 0,
    j = 0;
  let maxLength = 0;
  while (j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      maxLength = Math.max(set.size, maxLength);
    } else {
      set.delete(s[i++]);
    }
  }
  return maxLength;
}

const run = () => {
  const str1 = "abcabcbb";
  const str2 = "bbbbb";
  const str3 = "pwwkew";
  console.log(lengthOfLongestSubstring(str1));
  console.log(lengthOfLongestSubstring(str2));
  console.log(lengthOfLongestSubstring(str3));
};
export default run;
