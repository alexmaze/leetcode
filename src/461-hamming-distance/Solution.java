public class Solution {
  public int hammingDistance(int x, int y) {
    int ret = 0;
    while (x != 0 || y != 0) {
      int a = x % 2;
      int b = y % 2;

      if (a != b) {
        ret++;
      }

      if (x != 0) {
        x = x >> 1;
      }
      if (y != 0) {
        y = y >> 1;
      }
    }
    return ret;
  }

  public static void main(String[] argv) {
    Solution s = new Solution();
    System.out.println(s.hammingDistance(3, 1));
  }
}