import { createCanvas } from "./create";

import { drawCloud } from "./draw";

const dom = document.getElementById("app");


createCanvas(dom);

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
drawCloud(ctx!);

