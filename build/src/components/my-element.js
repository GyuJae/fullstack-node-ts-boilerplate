import { __decorate } from "tslib";
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyElement = class MyElement extends LitElement {
    static styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
    name = 'World';
    count = 0;
    render() {
        return html `
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
    }
    _onClick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
};
__decorate([
    property({ type: String })
], MyElement.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map