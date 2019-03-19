class LinkedListNode {
    value: any;
    next: LinkedListNode | null = null;
    constructor(value: any, node?: LinkedListNode) {
        this.value = value;
        this.next = node || null;
    }

    toString(callback?: Function): string {
        return callback ? callback(this.value) : String(this.value);        
    }
}
export default LinkedListNode;
