import * as assert from "power-assert"; 
import * as _ from "underscore";
import {Node, Container} from "../node";

export class LinkedList<T> extends Container {
    root: Node<T>;

    /**
     * 末尾にappend
     * @param data 
     */
    public appendToTail(data: T) {
        if (this.isEmpty()){
            this.root = new Node<T>(data);
        }else {
            let node = this.root;
            while (node.next != null) {
                node = node.next;
            }
            node.next = new Node<T>(data);
        }
        this.increment();
    }

    /**
     * 先頭にappend
     * @param data 
     */
    public append(data: T) {
        let node = new Node<T>(data);
        node.next = this.root;
        this.root = node;
        this.increment();
    }

    /**
     * 削除
     * @param data 
     */
    public remove(data: T) {
        if (this.isEmpty()){
            return false;
        } else if (_.isEqual(this.root.data, data)){
            /* 先頭ノードを削除(次のノードに置き換える） */
            this.root = this.root.next;
            this.decrement();
            return true;
        }else {
            /* 引数と等しいノードを探索する O(n) */
            let node: Node<T> = this.root;
            while (!_.isEqual(node.next.data, data) && node.next != null) {
                node = node.next;
            }
            if (node.next == null) {
                return false;
            } else {
                /* ノードを１つ削除し、次の次のノードに置き換える O(1) */
                node.next = node.next.next;
                this.decrement();
                return true;
            }
        }
    }

    public iterator(): LinkedList.Iterator<T> {
        return new LinkedList.Iterator<T>(this.root);
    }

    public dump() {
        let one = this.root;
        console.log("=== dump start ====");
        for(let i=0; i<this.getSize(); i++) {
            console.log("dump: "+ one.data + "->");
            one = one.next;
        }
        console.log("=== dump end ====");
    }
}

export module LinkedList {
    export class Iterator<T> {
        node: Node<T>

        constructor(node: Node<T>) {
            this.node = node;
        }

        public next(): T {
            if(this.hasNext()){
                const data = this.node.data;
                this.node = this.node.next;
                return data;
            }
            else {
                return null;
            }
        }
        
        public hasNext(): boolean {
            return this.node != null;
        }
    }
}

const test = ()=>{
    const list: LinkedList<number> = new LinkedList();
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.remove(2);
    // list.dump();

    const ite = list.iterator();
    assert(ite.next() === 1);
    assert(ite.next() === 3);
    assert(ite.next() === null);
};

test();

