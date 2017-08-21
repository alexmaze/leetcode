public class Solution {
  public String reverseWords(String s) {
    char[] arr = new char[s.length()];
    int start = 0;
    int end = 0;
    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) != ' ') {
        end++;
      } else {
        // ------
        int m = start;
        for (int n = end - 1; n >= start; n--) {
          arr[m] = s.charAt(n);
          m++;
        }
        // ------

        arr[end] = ' ';
        start = i + 1;
        end = i + 1;
      }
    }
    // ------
    int m = start;
    for (int n = end - 1; n >= start; n--) {
      arr[m] = s.charAt(n);
      m++;
    }
    // ------

    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < arr.length; i++) {
      sb.append(arr[i]);
    }
    return sb.toString();
  }

  public static void main(String[] argv) {
    Solution s = new Solution();
    System.out.println(s.reverseWords("Let's take LeetCode contest"));
  }
}