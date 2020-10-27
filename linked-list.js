class Node {
	constructor(data, next){
		this.data = data || null;
		this.next = next || null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
	}

	insertAtHead(value){
       if (this.head == null || this.tail == null){
       	   const node  = new Node(value, this.head)
       	   this.head = node;
       	   this.tail = node;
       } else{
       	let node = new Node(value, this.head)
       	this.head = node;
       }
       return this.head
	}

	insertAtTail(value){
		if (this.head == null || this.tail == null){
			let node = new Node(value, this.head);
			this.head = node;
			this.tail = node;
		}else {
		   const node = new Node(value, null);
		   const prev = this.tail;
		   prev.next = node;
		   this.tail = node
		}
        return this.tail;
	}

	insertAt(position,value){
		const length = LinkedList.getLength(this);
		let temp = this.head;
		let node = new Node(value, null)
		if(position < 0 || position > length){
			return null;
		} else if(position === 0){
		    node = new Node(value, this.head);
			this.head = node;
			return this.head;
		} else{
			let temp = this.head;
			for (let i = 0; i < position-1; i++){
				temp = temp.next
			}

			let prev = temp;
			prev.next = temp.next;

		    node = new Node(value, prev.next);
			temp.next = node;
		}
        return node
	}


	removeAtHead(){
		if (this.head == null || this.tail == null){
			return null;
		} else{
			const head = this.head;
			this.head = head.next;
		}

		return this.head;
	}

	removeAtTail(){
		if (this.head == null || this.tail == null){
			return null;
		}else{
          let pos = LinkedList.indexOfTail(this) - 1;
          let temp = this.head;
          for (let i = 0; i < pos; i++){
              temp = temp.next;
          }

          let next = temp.next.next
          temp.next = next;
          this.tail = temp;
		}
		return this.tail;
	}
}

LinkedList.generate = function(...values){
	const list = new LinkedList()
	for(let i = values.length - 1; i >=0; i--){
		list.insertAtHead(values[i])
	}

	return list
}

LinkedList.indexOfTail = function(list) {
	let head = list.head;
	let index = 0;
	while(head){
		head = head.next;
		index++;
	}
	return index-1;
}

LinkedList.getLength = function(list){
	let length = 0;
		let head = list.head;
		while(head){
			head = head.next
			length++;
		}

		return length;
}


module.exports = LinkedList;