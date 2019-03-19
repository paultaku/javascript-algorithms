import LinkedListNode from './linked-list-node';

class LinkedList {
    head: LinkedListNode | null = null;
    tail: LinkedListNode | null = null;
    value: any;
    
    compare: () => void;
    constructor(value?: any, compare?: () => void) {
        this.value = value;
        if (compare) {
            this.compare = compare;
        }
    }
    append(value: any): LinkedList {
        const newNode = new LinkedListNode(value);
        if(this.head) {
            if(this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        return this;
    }

    prepend(value: any): LinkedList {
        const newNode = new LinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    delete(value: any): LinkedListNode | null {
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        if(node.value === value) {
            if((<LinkedListNode>this.head).value === (<LinkedListNode>this.tail).value) {
                this.head = null;
                this.tail = null;
            } else {
                node = <LinkedListNode>this.head.next;
            }
        }
        while(node.next) {
            if(node.next) {
                if(node.next.value === (<LinkedListNode>this.tail).value) {
                    this.tail = node;
                }
                node.next = node.next.next;
            }
            // node = <LinkedListNode>node.next;
            console.log(this.toArray().map(o => o.value));
        }
        // console.log(this.toArray().map(o => o.value));
        return null;
    }

    deleteTail(): LinkedListNode {
        return new LinkedListNode(1);
    }

    deleteHead(): LinkedListNode {
        return new LinkedListNode(1);
    }

    find(value: any): void {
        this.value = value;
    }

    toArray(): LinkedListNode[] {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next || null;
        }

        return nodes;
    }

    toString(callback?: Function): string {
        return this.toArray()
            .map( o => callback ? callback(o) : o)
            .join(',') as string || '';
    }

    
}
export default LinkedList;
