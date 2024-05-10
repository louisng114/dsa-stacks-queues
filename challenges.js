const {Node, Stack} = require("./stack");

class BrowserHistory {
    constructor() {
        this.currentPage = null;
        this.backHistory = new Stack();
        this.forwardHistory = new Stack();
    }

    onVisitSite(url) {
        this.currentPage = new Node(url);
        this.backHistory.push(url);
        this.forwardHistory = new Stack();
    }

    back() {
        this.forwardHistory.push(this.currentPage);
        const node = this.backHistory.pop();
        this.currentPage = node;
    }

    foward() {
        this.backHistory.push(this.currentPage);
        const node = this.forwardHistory.pop();
        this.currentPage = node;
    }
}
