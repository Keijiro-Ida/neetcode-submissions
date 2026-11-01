class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}


class PrefixTree {

    private root: TrieNode;

    constructor() { {
        this.root = new TrieNode();
    }}

     insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this.find(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix: string): boolean {
    return this.find(prefix) !== null;
  }
    private find(s: string): TrieNode | null {
    let node = this.root;
    for (const ch of s) {
      const next = node.children.get(ch);
      if (!next) return null;
      node = next;
    }
    return node;
  }
}
