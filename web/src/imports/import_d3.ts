// file to only import what we need from d3, to keep filesizes down
// in larger projects: make one per file

import { scaleTime, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from "d3-axis";
import { format } from "d3-format";
import { extent } from "d3-array";
import { select } from "d3-selection";
import { line, area, curveCatmullRom } from "d3-shape";

export default {
  scaleTime: scaleTime,
  scaleLinear: scaleLinear,
  axisBottom: axisBottom,
  axisLeft: axisLeft,
  select: select,
  extent: extent,
  format: format,
  line: line,
  area: area,
  curveCatmullRom: curveCatmullRom,
};


