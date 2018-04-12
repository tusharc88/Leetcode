/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = function(val) {
   this.val = val;
   this.next - null;
 }

const mergeTwoLists = function(l1, l2) {

    if(l1 === null) return l2;
    if(l2 === null) return l1;

    let head = new ListNode();
    if (l1.val > l2.val) {
        head = l2;
        l2 = l2.next;
    } else {
        head = l1;
        l1 = l1.next;
    }

    let prevNode = head;


    while(l1 !== null && l2 !== null) {
        if(l1.val > l2.val) {
            prevNode.next = l2;
            l2 = l2.next;
        } else {
            prevNode.next = l1;
            l1 = l1.next;
        }

        prevNode = prevNode.next;

    }

    if(l1 !== null) prevNode.next = l1;
    if(l2 !== null) prevNode.next = l2;

    return head;

};

const checkLinkedListEquality = function(listOne, listTwo) {
  while(listOne !== null && listTwo !== null) {
    if(listOne.val !== listTwo.val)
      return false;

    listOne = listOne.next;
    listTwo = listTwo.next;
  }

  if(listOne !== null || listTwo !== null) return false;

  return true;
}

exports.ListNode = ListNode;
exports.mergeTwoLists = mergeTwoLists;
exports.checkLinkedListEquality = checkLinkedListEquality;
