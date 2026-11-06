// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.


var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);
    if (this.minStack.isEmpty() || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
    }   
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]; // return the minimum element in the stack  
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]; // return the top element in the stack
};

MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        const value = this.stack.pop();
        if (value === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
};