const ListNode = require('./index').ListNode;
const mergeTwoLists = require('./index').mergeTwoLists;
const checkLinkedListEquality = require('./index').checkLinkedListEquality;

test('mergeTwoLists is a function', () => {
  expect(typeof mergeTwoLists).toEqual('function');
});


test('mergeTwoLists working for 2 non empty linked lists', () => {

  const one = new ListNode(1);
  const two = new ListNode(2);
  const three = new ListNode(3);

  one.next = two;
  two.next = three;
  three.next = null;

  const o = new ListNode(1);
  const t = new ListNode(2);
  const th = new ListNode(3);

  o.next = t;
  t.next = th;
  th.next = null;

  const resOne = new ListNode(1);
  const resO = new ListNode(1);
  const resTwo = new ListNode(2);
  const resT = new ListNode(2);
  const resThree = new ListNode(3);
  const resTh = new ListNode(3);

  resOne.next = resO;
  resO.next = resTwo;
  resTwo.next = resT;
  resT.next = resThree;
  resThree.next = resTh;
  resTh.next = null;

  expect(checkLinkedListEquality(mergeTwoLists(one, o), resOne)).toBeTruthy();
});

test('mergeTwoLists working for 1 empty linked lists', () => {

  const one = new ListNode(1);
  const two = new ListNode(2);
  const three = new ListNode(3);

  one.next = two;
  two.next = three;
  three.next = null;

  const o = null;

  const result = one;

  expect(checkLinkedListEquality(mergeTwoLists(one, o), result)).toBeTruthy();
});

test('mergeTwoLists working for 2 empty linked lists', () => {

  const one = null;
  const two = null;

  const result = null;

  expect(checkLinkedListEquality(mergeTwoLists(one, two), result)).toBeTruthy();
});
