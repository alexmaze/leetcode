public class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ret = new ArrayList<String>();
        for (int i = 1; i <= n; i++) {
          int mod3 = i % 3;
          int mod5 = i % 5;
          if (mod3 != 0 && mod5 != 0) {
            ret.push(Integer.toString(i));
          } else if (mod3 != 0) {
            ret.push("Buzz");
          } else if (mod5 != 0) {
            ret.push("Fizz");
          } else {
            ret.push("FizzBuzz");
          }
        }
        return ret;
    }
}