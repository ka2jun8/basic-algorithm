import {Node, Container} from "../node";
import * as assert from "power-assert";

export class Stack<T> extends Container{
    top: Node<T> = null;

    public push(data: T) {
        const n: Node<T> = new Node<T>(data);
        n.next = this.top;
        this.top = n;
        this.increment();
    }

    public pop(): T {
        if(this.isEmpty()) {
            return null;
        }else {
            const data = this.top.data;
            this.top = this.top.next;
            this.decrement();
            return data;
        }
    }

    public peek(): T {
        if(this.isEmpty()){
            return null;
        }else {
            return this.top.data;
        }
    }
    
    public dump() {
        console.log("=== dump start ===");
        let node = this.top;
        while(node){
            console.log("data = ", node.data);
            node = node.next;
        }
        console.log("=== dump end ===");
    }
}

export class Queue<T> extends Container{
    tail: Node<T> = null;
    head: Node<T> = null;

    public enqueue(data: T) {
        const n = new Node<T>(data);
        if(!this.tail){
            this.head = this.tail = n;
        }
        else {
            this.head.next = n;
            this.head = this.head.next;
        }
        this.increment();
    }

    public dequeue(): T {
        if(this.isEmpty()){
            return null;
        }else {
            const result = this.tail.data;
            this.tail = this.tail.next;
            this.decrement();
            return result;
        }
    }

    public peek(): T {
        if(this.isEmpty()){
            return null;
        }else {
            return this.tail.data;
        }
    }

    public dump() {
        console.log("=== dump start ===");
        let node = this.head;
        while(node){
            console.log("data = ", node.data);
            node = node.next;
        }
        console.log("tail = ", this.tail && this.tail.data);
        console.log("=== dump end ===");
    }

}

const test = ()=>{
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    assert(stack.pop() === 2);
    assert(stack.pop() === 1);
    assert(stack.pop() === null);

    const q = new Queue<number>();
    q.enqueue(1);
    q.enqueue(2);
    assert(q.dequeue() === 1);
    assert(q.dequeue() === 2);
    assert(q.peek() === null);
};

test();
