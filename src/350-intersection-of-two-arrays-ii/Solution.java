import java.util.HashMap;
import java.util.ArrayList;

public class Solution {

  public static void main(String[] args) {
    System.out.println("Hello, World");
    Solution sol = new Solution();
    int[] ret = sol.intersect(new int[]{1,2,2,1}, new int[]{2,2});
    for (int i: ret) {
      System.out.println(i);
    }
  }
  
  public int[] intersect(int[] nums1, int[] nums2) {
    ArrayList<Integer> retList = new ArrayList<>();
    HashMap<Integer, Integer> map = new HashMap<>();

    for (int i: nums1) {
      Integer v = map.get(i);
      map.put(i, v == null ? 1 : v + 1);
    }

    for (int i: nums2) {
      Integer v = map.get(i);
      if (v != null && v > 0) {
        map.put(i, v - 1);
        retList.add(i);
      }
    }

    int[] ret = new int[retList.size()];
    for (int i = 0; i < ret.length; i++) {
      ret[i] = retList.get(i);
    }

    return ret;
  }
}

public class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        List<Integer> result = new ArrayList<Integer>();
        int i = 0, j = 0;
        while (i < nums1.length && j < nums2.length) {
            int n1 = nums1[i];
            int n2 = nums2[j];
            if (n1 == n2) {
                result.add(n1);
                i++;
                j++;
            }
            else if (n1 < n2)
                i++;
            else
                j++;
        }
        int[] ret = new int[result.size()];
        int k = 0;
        for (int num : result)
           ret[k++] = num;
        return ret;
    }
}