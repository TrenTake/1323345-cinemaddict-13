export class Template {
  getTemplate() {
    return this._element;
  }

  removeTemplate() {
    this._element = null;
  }
}
