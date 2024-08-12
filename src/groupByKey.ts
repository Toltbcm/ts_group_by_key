type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = Object.fromEntries(
    items.map((item) => [item[key] as string, []]),
  );

  for (const item of items) {
    result[item[key] as string].push(item);
  }

  return result;
}
