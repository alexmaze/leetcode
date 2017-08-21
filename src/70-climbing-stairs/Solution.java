import java.util.HashMap;

public class Solution {
  public int climbStairs(int n) {
    if (n == 0) {
      return 1;
    }
    int left = climbStairs(n - 1);
    int right = n >= 2 ? climbStairs(n - 2) : 0;
    int total = left + right;
    return total;
  }

  public static void main(String[] argv) {
    Solution s = new Solution();
    System.out.println(s.climbStairs(4));
  }
}