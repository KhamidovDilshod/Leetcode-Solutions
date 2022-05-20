/**Custom utilities in typescript by Dilshodbek Khamidov*/

// Program to implement Queue data structure

class Queue<T> {
	private items: Array<T>;

	constructor() {
		this.items = [];
	}

	enqueue(element) {
		return this.items.push(element);
	}

	dequeue(element) {
		return this.items.shift();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}
}
