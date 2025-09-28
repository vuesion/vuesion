export function cleanUndefined<T extends object>(obj: T): T {
  const out: any = {};
  Object.keys(obj).forEach((k) => {
    const v = (obj as any)[k];
    if (v !== undefined) out[k] = v;
  });
  return out;
}
