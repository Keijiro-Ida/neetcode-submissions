class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for(const t of tokens) {
            switch(t) {
                case '+':
                    const n1 = stack.pop(), n2 = stack.pop();
                    stack.push(n1 + n2);
                    break;
                case '-':
                    const n3 = stack.pop(), n4 = stack.pop();
                    stack.push(n4 - n3);
                    break;
                case '*':
                    const n5 = stack.pop(), n6 = stack.pop();
                    stack.push(n5 * n6);
                    break;
                case '/':
                    const n7 = stack.pop(), n8 = stack.pop();
                    stack.push(Math.trunc(n8 / n7));
                    break;
                default:
                    stack.push(Number(t));
            }
        }

        return stack.pop();
    }
}
