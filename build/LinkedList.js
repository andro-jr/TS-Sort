"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head)
            throw new Error('Index out of bound!');
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bound');
    }
    compare(leftIndex) {
        if (!this.head)
            throw new Error('List is empty!');
        return this.at(leftIndex).data > this.at(leftIndex + 1).data;
    }
    swap(leftIndex) {
        const temp = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(leftIndex + 1).data;
        this.at(leftIndex + 1).data = temp;
    }
    print() {
        if (!this.head)
            throw new Error('List is empty!');
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
