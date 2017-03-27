
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} list
 */
ListNode.prototype.toString = function() {
    var output = [];
    var p = this;
    for (; p !== null;) {
        output.push(p.val);
        p = p.next;
    }
    return output.join(' -> ');
}
/**
 * @param {Array<number>} arr
 */
ListNode.parseArray = function buildList(arr) {
    var head = new ListNode(arr[0]);
    var tail = head;
    for (var i = 1; i < arr.length; i++) {
        var temp = tail;
        tail = new ListNode(arr[i]);
        temp.next = tail;  
    }
    return head;
}

module.exports = ListNode;