public class Solution {
    public boolean isHappy(int n) {
      if (n < 10) {
        if (n === 1 || n === 7) {
          return true
        } else {
          return false
        }
      }
      return isHappy(transformAndCalculate(n)) 
    }
    public static int transformAndCalculate(int n) {
        int ret = 0
        while (n >= 10) {
          int shang = n / 10
          int left = n % 10
          ret += left * left
          n = shang
        }
        ret += n * n
        return ret
    }
}