import { duneQueryUrlBuilder, formatCurrency, formatNumber } from "./utils";
import { FALLBACK_STATS } from "@/constants";

const QUERY_ID_TOTAL_VALUE_LOCKED = 3609251;
const QUERY_ID_SAFES_CREATED = 2459401;
const QUERY_ID_TRANSFER_VOLUME = 3733253;

interface TotalValueLockedData {
  total_balance_usd: string;
}

interface SafesCreatedData {
  num_safes: string;
}

interface TransferVolumeData {
  cumulative_transfer_volume: string;
}

export interface DuneStats {
  totalValueLocked: TotalValueLockedData;
  safesCreated: SafesCreatedData;
  transferVolume: TransferVolumeData;
}

const fetchQuery = async (queryId: number) => {
  try {
    const response = await fetch(
      duneQueryUrlBuilder(queryId, process.env.DUNE_API_KEY!)
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result.rows[0];
  } catch (err) {
    console.error(`Error fetching query ${queryId}: ${(err as Error).message}`);
    return null;
  }
};

export const fetchAllStats = async (): Promise<DuneStats> => {
  try {
    const [totalValueLocked, safesCreated, transferVolume] = await Promise.all([
      fetchQuery(QUERY_ID_TOTAL_VALUE_LOCKED),
      fetchQuery(QUERY_ID_SAFES_CREATED),
      fetchQuery(QUERY_ID_TRANSFER_VOLUME),
    ]);

    return {
      totalValueLocked: totalValueLocked
        ? {
            total_balance_usd: formatCurrency(
              totalValueLocked.total_balance_usd
            ),
          }
        : { total_balance_usd: FALLBACK_STATS.TOTAL_VALUE_LOCKED },
      safesCreated: safesCreated
        ? { num_safes: formatNumber(safesCreated.num_safes) }
        : { num_safes: FALLBACK_STATS.SAFES_CREATED },
      transferVolume: transferVolume
        ? {
            cumulative_transfer_volume: formatCurrency(
              transferVolume.cumulative_transfer_volume
            ),
          }
        : { cumulative_transfer_volume: FALLBACK_STATS.TRANSFER_VOLUME },
    };
  } catch (err) {
    console.error(`Error fetching stats: ${(err as Error).message}`);
    return {
      totalValueLocked: {
        total_balance_usd: FALLBACK_STATS.TOTAL_VALUE_LOCKED,
      },
      safesCreated: { num_safes: FALLBACK_STATS.SAFES_CREATED },
      transferVolume: {
        cumulative_transfer_volume: FALLBACK_STATS.TRANSFER_VOLUME,
      },
    };
  }
};
