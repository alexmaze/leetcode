public class Solution {
  public int maxProfit(int[] prices) {
    int min = prices[0];
    int prof = 0;

    for (int i = 1; i < prices.length; i++) {
      int np = prices[i] - min;
      if (np > prof) {
        prof = np;
      } else if (prices[i] < min) {
         min = prices[i];
      }
    }

    return prof;
  }

  public static void main(String[] argv) {
    Solution s = new Solution();
    int[] in = new int[] { 7, 1, 5, 3, 6, 4 };
    System.out.println(s.maxProfit(in));
  }
}