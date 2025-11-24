import { useMemo } from 'react';

/**
 * Groups an array of objects by a specified key.
 * @param data Array of objects to group
 * @param key Key of the object to group by
 * @returns An object where keys are group values and values are arrays of objects
 */
export function useGroupBy<T, K extends keyof T>(data: T[], key: K): Record<string, T[]> {
  return useMemo(() => {
    return data.reduce(
      (acc, item) => {
        const groupKey = item[key];
        if (groupKey == null) return acc;
        const strKey = String(groupKey);
        if (!acc[strKey]) {
          acc[strKey] = [];
        }
        acc[strKey].push(item);
        return acc;
      },
      {} as Record<string, T[]>,
    );
  }, [data, key]);
}
