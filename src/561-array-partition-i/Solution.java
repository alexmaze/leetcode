public class Solution {
  public int arrayPairSum(int[] nums) {

    this.quickSort(nums, 0, nums.length - 1);
    int ret = 0;
    for (int i = 0; i < nums.length; i++) {
      ret += nums[i];
      i++;
    }
    return ret;
  }

      public void quickSort(int[] arr, int first, int last) {
        if (first < last) {
            // 分割，并且获取分割点位置
            int split = partition(arr, first, last);
            // 左边排序
            quickSort(arr, first, split - 1);
            // 右边排序
            quickSort(arr, split + 1, last);
        }
    }
    private int partition(int[] arr, int first, int last) {
        while (first < last) {
            while (first < last && arr[last] >= arr[first]) {
                last--;
            }
            if (first < last) {
                int temp = arr[first];
                arr[first] = arr[last];
                arr[last] = temp;
            }
            while (first < last && arr[first] < arr[last]) {
                first++;
            }
            if (first < last) {
                int temp = arr[first];
                arr[first] = arr[last];
                arr[last] = temp;
            }
        }
        return  first;
    }

  public static void main(String[] argv) {
    Solution s = new Solution();
    int[] a = {1,4,3,2};
    System.out.println(s.arrayPairSum(a));
  }
}