class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
   
    let dummy = new ListNode(-1);
    let current = dummy;

   
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

   
    current.next = list1 !== null ? list1 : list2;

    
    return dummy.next;
}


function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);

const mergedList = mergeTwoLists(list1, list2);
console.log(listToArray(mergedList));
