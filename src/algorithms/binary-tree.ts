import {Node, Container} from "../node";

export class BinaryNode<T> {
    left: BinaryNode<T>;
    right: BinaryNode<T>;
    data: T;

    constructor(data: T) {
        this.left = this.right = null;
        this.data = data;
    }

}

export class BinarySearchTree<T> extends Container {
    root: BinaryNode<T> = null;

    public insert(data: T, node?: BinaryNode<T>) {
        if(!node) {
            if(!this.root){
                this.root = new BinaryNode<T>(data);
                this.increment();
            }
            else {
                this.insert(data, this.root);
            }
        }else {
            if(this.compare(node.data, data)) {
                if(!node.right){
                    node.right = new BinaryNode(data);
                    this.increment();
                }else {
                    this.insert(data, node.right);
                }
            }else {
                if(!node.left){
                    node.left = new BinaryNode(data);
                    this.increment();
                }else {
                    this.insert(data, node.left);
                }
            }
        }

    }

    public search(data: T, node?: BinaryNode<T>): boolean {
        if(!node || !this.root) {
            return false;
        }else if(!node || this.root) {
            this.search(data, this.root);
        }else if(this.compare(node.data, data)){
            return this.search(data, node.right);
        }else {
            return this.search(data, node.left);
        }
    }

    public compare(data1: T, data2: T): boolean {
        if(typeof data1 !== typeof data2) {
            return false;
        }else {
            if(typeof data1 === "number" || typeof data1 === "string") {
                if(data1 <= data2) {
                    return true;
                }else {
                    return false;
                }
            }else if(typeof data1 === "object") {
                const data1str = JSON.stringify(data1);
                const data2str = JSON.stringify(data1);
                if(data1str <= data2str) {
                    return true;
                }else {
                    return false;
                }
            }else {
                return false; //それ以外はしらん
            }
        }
    }

}