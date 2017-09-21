import {BinaryNode} from "./binary-tree";
import {Queue, Stack} from "./stack-queue";
import {HashSet} from "./hash-set";

export class GraphTraversal<T> {
    public BreadthFirstSearch(root: BinaryNode<T>){
        if(!root) {
            return;
        }
        const queue: Queue<BinaryNode<T>> = new Queue();
        queue.enqueue(root);

        while(!queue.isEmpty()) {
            const node: BinaryNode<T> = queue.dequeue();
            
            // doing(node);

            if(node.left) {
                queue.enqueue(node.left);
            }
            if(node.right) {
                queue.enqueue(node.right);
            }
        }

    }

    public preOrderRecursiveDFS(node: BinaryNode<T>) {
        if(!node){
            return;
        }
        // doing(node);
        this.preOrderRecursiveDFS(node.left);
        this.preOrderRecursiveDFS(node.right);
    }
    public preOrderDFS(root: BinaryNode<T>) {
        if(!root) {
            return;
        }
        const stack: Stack<BinaryNode<T>> = new Stack();
        stack.push(root);

        while(!stack.isEmpty()) {
            const node = stack.pop();
            //doing(node);
            if(node.left) {
                stack.push(node.left);
            }
            if(node.right) {
                stack.push(node.right);
            }
        }
    }

    public inOrderRecursiveDFS(node: BinaryNode<T>) {
        if(!node) {
            return;
        }
        this.inOrderRecursiveDFS(node.left);
        //doing(node);
        this.inOrderRecursiveDFS(node.right);
    }
    public inOrderDFS(root: BinaryNode<T>) {
        if(!root) {
            return;
        }
        const stack: Stack<BinaryNode<T>> = new Stack();
        const visited: HashSet<BinaryNode<T>> = new HashSet();
        stack.push(root);

        while(!stack.isEmpty()) {
            let n: BinaryNode<T> = stack.peek();
            while(!n.left && !visited.contains(n.left)){
                n = n.left;
                stack.push(n);
            }
            const node = stack.pop();
            // doing(node);
            visited.add(node);
            if(!node.right && visited.contains(node.right)) {
                stack.push(node.right);
            }
        }

    }

    public postOrderRecursiveDFS(node: BinaryNode<T>) {
        if(!node) {
            return;
        }
        this.postOrderRecursiveDFS(node.left);
        this.postOrderRecursiveDFS(node.right);
        //doing(node);
    }

    public postOrderDFS(root: BinaryNode<T>) {
        if(!root) {
            return;
        }
        const stack: Stack<BinaryNode<T>> = new Stack();
        const visited: HashSet<BinaryNode<T>> = new HashSet();
        stack.push(root);

        while(!stack.isEmpty()) {
            let n = stack.peek();
            while((!n.left && !visited.contains(n.left) || 
                !n.right && !visited.contains(n.right))) {
                    if(!n.left && !visited.contains(n.left)) {
                        n = n.left;
                    }else {
                        n = n.right;
                    }
                    stack.push(n);
            }
            const node = stack.pop();
            //doing(node);
            visited.add(node);
        }

    }



}

