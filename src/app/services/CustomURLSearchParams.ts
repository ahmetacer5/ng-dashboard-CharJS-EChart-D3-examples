export class CustomURLSearchParams {
  params = {};
  public set(_key, _val) {
    this.params[_key] = _val;
  }

  public toString() {
    const esc = encodeURIComponent;
    const body = Object.keys(this.params)
      .map(k => esc(k) + '=' + esc(this.params[k]))
      .join('&');

    return body;
  }
}
