const addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let result = null,
    temp = null;
  while (l1 && l2) {
    const sum = l1.val + l2.val + carry;

    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    const nodeVal = sum % 10;
    if (!result) {
      result = new ListNode(nodeVal);
      temp = result;
    } else {
      temp.next = new ListNode(nodeVal);
      temp = temp.next;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    if (carry === 0) {
      temp.next = l1;
      break;
    }

    const sum = l1.val + carry;

    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    l1 = l1.next;
  }

  while (l2) {
    if (carry === 0) {
      temp.next = l2;
      break;
    }

    const sum = l2.val + carry;

    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    l2 = l2.next;
  }

  if (carry > 0) {
    temp.next = new ListNode(1);

    temp = temp.next;
  }

  return result;
};

module.exports = addTwoNumbers;
