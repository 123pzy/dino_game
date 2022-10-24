// 绘制背景动画：
// 第一片云：
/**
 * 绘制云
 * @param ctx canvas上下文
 */
export function drawCloud(ctx: CanvasRenderingContext2D): void {
  const cloudX1:number = 0;
  setInterval(() => {
    ctx.beginPath();
    ctx.clearRect(420 - cloudX1, 100, 200, 200);
    ctx.arc(
      500 - cloudX1,
      200,
      35,
      Math.PI / 180 * 18,
      Math.PI / 180 * 190,
      true
    );
    ctx.stroke();
  }, 500);
}
// var cloudX1 = 0;
// mySetInterval(() => {
//   ctx.beginPath();
//   ctx.clearRect(420 - cloudX1, 100, 200, 200);
//   ctx.arc(
//     500 - cloudX1,
//     200,
//     35,
//     [Math.PI / 180] * 18,
//     [Math.PI / 180] * 190,
//     true
//   );
//   ctx.arc(
//     452 - cloudX1,
//     210,
//     17,
//     [Math.PI / 180] * -40,
//     [Math.PI / 180] * 170,
//     true
//   );
//   ctx.arc(
//     435 - cloudX1,
//     222,
//     10,
//     [Math.PI / 180] * -90,
//     [Math.PI / 180] * 90,
//     true
//   );
//   ctx.arc(
//     535 - cloudX1,
//     222,
//     10,
//     [Math.PI / 180] * 90,
//     [Math.PI / 180] * -110,
//     true
//   );
//   ctx.stroke();
//   cloudX1 += 2;
//   if (420 - cloudX1 <= -200) {
//     cloudX1 = 520 - window.innerWidth;
//   }
// }, 30);
// // 绘制第二片云：
// var cloudX2 = 0;
// mySetInterval(() => {
//   ctx.beginPath();
//   ctx.clearRect(1120 - cloudX2, 0, 200, 200);
//   ctx.arc(
//     1200 - cloudX2,
//     100,
//     35,
//     [Math.PI / 180] * 18,
//     [Math.PI / 180] * 190,
//     true
//   );
//   ctx.arc(
//     1152 - cloudX2,
//     110,
//     17,
//     [Math.PI / 180] * -40,
//     [Math.PI / 180] * 170,
//     true
//   );
//   ctx.arc(
//     1135 - cloudX2,
//     122,
//     10,
//     [Math.PI / 180] * -90,
//     [Math.PI / 180] * 90,
//     true
//   );
//   ctx.arc(
//     1235 - cloudX2,
//     122,
//     10,
//     [Math.PI / 180] * 90,
//     [Math.PI / 180] * -110,
//     true
//   );
//   ctx.stroke();
//   cloudX2 += 2;
//   if (1120 - cloudX2 <= -200) {
//     cloudX2 = 1220 - window.innerWidth;
//   }
// }, 30);
// // 绘制“星星”：
// var starX = 0;
// mySetInterval(() => {
//   ctx.beginPath();
//   ctx.clearRect(1610 - starX, 190, 30, 20);
//   ctx.arc(1620 - starX, 200, 5, 0, Math.PI * 2);
//   ctx.stroke();
//   starX += 2;
//   if (1620 - starX <= -200) {
//     starX = 1720 - window.innerWidth;
//   }
// }, 30);
