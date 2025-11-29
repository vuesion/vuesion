import type { BreakPoint } from '#shared/enums/BreakPoint';

export type ResponsiveValue<T> = Partial<Record<BreakPoint, T>>;

export type ScalarValue = string | number | boolean | null;

export interface DirectionsMap {
  top: ScalarValue;
  right: ScalarValue;
  bottom: ScalarValue;
  left: ScalarValue;
  [key: string]: ScalarValue;
}

export type VectorValue = DirectionsMap;

export type AllowedResponsiveValue = ScalarValue | VectorValue;

export type ResponsiveValues = Partial<Record<BreakPoint, AllowedResponsiveValue>>;
