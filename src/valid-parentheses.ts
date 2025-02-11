// https://leetcode.cn/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 示例 1：

// 输入：s = "()"

// 输出：true

// 示例 2：

// 输入：s = "()[]{}"

// 输出：true

// 示例 3：

// 输入：s = "(]"

// 输出：false

// 示例 4：

// 输入：s = "([])"

// 输出：true

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成
// 时间复杂度 O(n)，n是字符串长度，算法需要遍历整个字符串
// 空间复杂度 最坏情况下是 O(n)，最坏全是 （（（ 就要入栈 n/2 即 O(n/2) 简化为 O(n)
function isValid(s: string): boolean {
  const map: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };
  const stack: string[] = [];
  for (const item of s) {
    if (map[item]) {
      stack.push(item);
    } else {
      const last = stack.pop();
      if (!last || map[last] !== item) {
        return false;
      }
    }
  }
  // 如果栈为空说明括号匹配
  return stack.length === 0;
}
const run = () => {
  console.log("():", isValid("()"));
  console.log("()[]{}:", isValid("()[]{}"));
  console.log("(]:", isValid("(]"));
  console.log("([]):", isValid("([])"));
};

export default run;
