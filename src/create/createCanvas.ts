/**
 * 创建canvas画布
 * @param dom div元素
 */
export function createCanvas(dom: HTMLElement | null): void {
  const cas = document.createElement("canvas");
  cas.width = 500;
  cas.height = 500;
  dom!.appendChild(cas);
}
