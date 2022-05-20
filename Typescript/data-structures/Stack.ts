/**Stack<T> in typescript by Dilshodbek Khamidov*/
class Stack<T> {
	private items: Array<T> = [];

	constructor(item?: T) {
		this.items.push(item);
	}

	clear() {
		return this.items = [];
	}

	entries(): T[] {
		return this.items;
	}

	clone(): Array<any> {
		return this.items;
	}

	contains(item: T): boolean {
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i] == item) {
				return true;
			}
		}
		return false;
	}

	peek(): T {
		return this.items[this.items.length - 1];
	}

	pop(): T {
		const result = this.items[this.items.length - 1];
		this.items.splice(this.items.length - 1);
		return result;
	}

	push(object: T): void {
		this.items.push(object);
	}

	toArray(): Array<T> {
		return [...this.items];
	}
}

