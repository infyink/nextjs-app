import { Preset } from "./types";
import { TableNames } from "./types";

export const presets: { label: string; value: Preset }[] = [
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Yesterday",
    value: "yesterday",
  },
  {
    label: "This Week",
    value: "thisWeek",
  },
  {
    label: "Last 7 days",
    value: "past7Days",
  },
];

export const tablenames: { label: string; value: TableNames }[] = [
  { label: "R-1", value: "RoofOutside" },
  { label: "T2", value: "RoofOutside2" },
  { label: "T3", value: "RoofOutside3" },
  { label: "T4", value: "RoofOutside4" },
  { label: "T5", value: "RoofOutside5" },
  { label: "T6", value: "RoofOutside6" },
  { label: "T7", value: "RoofOutside7" },
  { label: "T8", value: "RoofOutside8" },
  { label: "T9", value: "RoofOutside9" },
];
