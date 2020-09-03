import { LitElement, html, customElement, property, css } from "lit-element";

@customElement("decorators-button")
export class DecoratorsButton extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: inline-flex;
        }
        button {
          cursor: pointer;
          line-height: 32px;
          border-style: solid;
          border-width: 2px;
          width: 100%;
          font-size: 16px;
          padding-left: 24px;
          padding-right: 24px;
        }
        button:disabled {
          cursor: not-allowed;
        }
        ::slotted(mds-icon) {
          top: 4px;
        }

        .primary {
          background-color: blue;
          border-color: red;
          color: white;
        }
        .primary:hover {
          background-color: rgba(blue, 0.8);
          border-color: transparent;
        }
        .primary:disabled {
          background-color: rgba(blue, 0.5);
        }

        .secondary {
          background-color: red;
          border-color: green;
          color: white;
        }
      `,
    ];
  }

  @property({ type: String })
  kind = "primary";

  @property({ type: String })
  name = "button";

  @property({ type: String })
  type = "button";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Function })
  onButtonMouseOver = () => {};

  handleClick(e) {
    this.dispatchEvent(
      new CustomEvent("clicked", {
        detail: e,
      })
    );
  }

  render() {
    return html`
      <button
        type=${this.type}
        @click=${this.handleClick}
        @mouseover=${this.onButtonMouseOver.bind(this)}
        class=${this.kind}
        name=${this.name}
        .disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }
}
