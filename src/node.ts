export class Node<T> { 
    next: Node<T>;
    data: T;

    constructor(data: T) {
        this.next = null;
        this.data = data;
    }
}

export abstract class Container {
    private size: number = 0;

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean{
        return this.getSize() === 0;
    }

    protected increment() {
        this.size++;
    }

    protected decrement() {
        this.size--;
    }
}
