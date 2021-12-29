var removeNthFromEnd = function(head, n) {
    let hare = head, curr = head;
    while (n--) {
        hare = hare.next;
    }
    while (hare && hare.next) {
        curr = curr.next;
        hare = hare.next;
    }
    if (!hare) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};
