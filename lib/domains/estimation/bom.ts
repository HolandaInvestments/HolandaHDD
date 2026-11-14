import type { BomItem, EstimationInput, EstimationOutput } from "@/lib/domains/estimation/types";

export function buildBom(input: EstimationInput, output: EstimationOutput): BomItem[] {
  const vendor = input.preferredVendor || "Vendor neutral";

  return [
    {
      category: "Wireless",
      vendor,
      description: "Wi-Fi 6/6E business access point",
      quantity: output.estimatedApCount,
      unit: "each",
      source: "deterministic_estimation"
    },
    {
      category: "Switching",
      vendor,
      description: "48-port managed access switch with PoE capability",
      quantity: output.estimatedSwitchCount,
      unit: "each",
      source: "deterministic_estimation"
    },
    {
      category: "Power",
      vendor,
      description: "Aggregate PoE budget allowance",
      quantity: output.estimatedPoeBudgetWatts,
      unit: "each",
      source: "deterministic_estimation"
    },
    {
      category: "Cabling",
      description: "Category 6 horizontal cabling allowance",
      quantity: output.estimatedHorizontalCablingFeet,
      unit: "feet",
      source: "deterministic_estimation"
    },
    {
      category: "Facilities",
      description: "Network equipment rack or wall cabinet",
      quantity: output.estimatedRackCount,
      unit: "each",
      source: "deterministic_estimation"
    },
    {
      category: "Core Spaces",
      description: "MDF/IDF telecom space allowance",
      quantity: output.estimatedMdfCount + output.estimatedIdfCount,
      unit: "each",
      source: "deterministic_estimation"
    }
  ];
}

export function bomToCsv(items: BomItem[]) {
  const rows = [
    ["category", "vendor", "sku", "description", "quantity", "unit", "source"],
    ...items.map((item) => [
      item.category,
      item.vendor || "",
      item.sku || "",
      item.description,
      String(item.quantity),
      item.unit,
      item.source
    ])
  ];

  return rows
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

