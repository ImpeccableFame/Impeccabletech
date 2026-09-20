import {
  BrainCircuit,
  Code2,
  Database,
  Feather,
  FileText,
  Palette,
  PenTool,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Workflow,
  Code2,
  Palette,
  FileText,
  BrainCircuit,
  Sparkles,
  Database,
  PenTool,
  Feather,
};

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.7,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
}) {
  const C = icons[name] ?? Sparkles;

  return <C size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
