const LinkedList = require('./linked-list.js')

test('Add node at the head of linked list', () =>{
	const ll = new LinkedList();
	let Head = ll.insertAtHead(20)
	let updatedHead = ll.insertAtHead(154)
	let oldhead = Head;
	expect(ll.insertAtHead(20).data).toBe(20);
	expect(ll.insertAtHead(154).data).toBe(154);
	expect(updatedHead.next.data).toBe(20);
});

test('Adds node at the tail of the linked list', () => {
	const ll = new LinkedList();
	let end = ll.insertAtTail(30)
	let newTail = ll.insertAtTail(40)

	expect(newTail).toBe(ll.tail)
})

test('removes node at the head of linked list', () => {
	const ll = LinkedList.generate(21,13,14,5,30,40,60);
	expect(ll.removeAtHead().data).toBe(13) 
})

test('removes node at the tail of the linked list', () => {
	const ll = LinkedList.generate(21,13,14,30,40,60);
	expect(ll.removeAtTail().data).toBe(40)
	expect(ll.removeAtTail().data).toBe(30)
})

test('inserts a node a given index', () => {
	const ll = LinkedList.generate(21,13,14,30,40,60);
	expect(ll.insertAt(0,55).next.data).toBe(21);
	expect(ll.insertAt(3,101).next.data).toBe(14);
})