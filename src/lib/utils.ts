import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import numbro from "numbro";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const duneQueryUrlBuilder = (queryId: number, apiKey: string) =>
  `https://api.dune.com/api/v1/query/${queryId}/results?api_key=${apiKey}`;

function uppercaseSuffixes(formatted: string): string {
  return formatted.replace(/([kmbt])$/i, (match) => match.toUpperCase());
}

export function formatCurrency(value: string | number): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) {
    return "$0";
  }

  const formatted = numbro(num).formatCurrency({
    average: true,
    mantissa: 1,
    optionalMantissa: true,
    currencySymbol: "$",
    spaceSeparatedCurrency: false,
  });

  return uppercaseSuffixes(formatted);
}

export function formatNumber(value: string | number): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) {
    return "0";
  }

  const formatted = numbro(num).format({
    average: true,
    mantissa: 1,
    optionalMantissa: true,
  });

  return uppercaseSuffixes(formatted);
}
