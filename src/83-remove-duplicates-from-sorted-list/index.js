/**
 * @id: 83
 * @title: Remove Duplicates from Sorted List
 * @url: https://leetcode.com/problems/remove-duplicates-from-sorted-list/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-06-05
*/

const solution = require("./solution")
function ListNode(val) {
  this.val = val
  this.next = null
}

const n1 = new ListNode(1)
const n2 = new ListNode(1)
const n3 = new ListNode(1)
const n4 = new ListNode(2)
const n5 = new ListNode(3)
const n6 = new ListNode(3)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
n6.next = null

printList(n1)
printList(solution(n1))

function printList(head) {
  let res = []
  while (head != null) {
    res.push(head.val)
    head = head.next
  }
  console.log(res.join(" -> "))
}
