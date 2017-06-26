/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) {
          return null;
        }
        ListNode preNode = head;
        while (preNode.next != null) {
          ListNode nextNode = preNode.next;
          if (nextNode.val == preNode.val) {
            preNode.next = nextNode.next;
          } else {
            preNode = preNode.next;
          }
        }
        return head;
    }
}
