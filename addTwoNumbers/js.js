/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const n = 10;
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum;
  let retList1 = new ListNode(0);
  let retList = retList1;
  let l1CurrentNode = l1;
  let l2CurrentNode = l2;
  while(l1CurrentNode || l2CurrentNode) {
    sum = l1CurrentNode.val + l2CurrentNode.val;
    if (sum >= n) {
      retList.val = sum - n;
      retList.next = new ListNode(1);
      l1CurrentNode.next && (l1CurrentNode.next.val += 1) || l2CurrentNode.next && (l2CurrentNode.next.val += 1);
    } else {
      retList.val = sum;
    }
    if (l1CurrentNode.next === null && l2CurrentNode.next === null) break;
    retList = retList.next = new ListNode(null);
    retList.next = null;
    l1CurrentNode = l1CurrentNode.next;
    l2CurrentNode = l2CurrentNode.next;
    if(l1CurrentNode && !l2CurrentNode) {
      l2CurrentNode = new ListNode(null);
    }
    if(l2CurrentNode && !l1CurrentNode) {
      l1CurrentNode = new ListNode(null);
    }
  }
  return retList1;
};