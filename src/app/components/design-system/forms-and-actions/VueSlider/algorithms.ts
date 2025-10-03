/**
 * adopted from https://github.com/airbnb/rheostat
 */

export interface IAlgorithm {
  getPosition(value: number, min: number, max: number): number;

  getValue(percentageDiff: number, min: number, max: number): number;
}

export const geometric: IAlgorithm = {
  getPosition(value: number, min: number, max: number): number {
    return (max / (max - min)) ** 0.5 * ((value - min) / max) ** 0.5 * 100;
  },

  getValue(percentageDiff: number, min: number, max: number): number {
    return Math.round((percentageDiff / 100) ** 2 * (max - min)) + min;
  },
};

export const linear: IAlgorithm = {
  getPosition(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  },

  getValue(percentageDiff: number, min: number, max: number): number {
    const decimal: number = percentageDiff / 100;

    if (percentageDiff <= 0) {
      return min;
    } else if (percentageDiff >= 100) {
      return max;
    }

    return Math.round((max - min) * decimal + min);
  },
};

export const log: IAlgorithm = {
  getPosition(value: number, min: number, max: number): number {
    const minv: number = min === 0 ? 0 : Math.log(min);
    const maxv: number = Math.log(max);

    const scale: number = (maxv - minv) / 100;

    return (Math.log(value) - minv) / scale;
  },

  getValue(percentageDiff: number, min: number, max: number): number {
    const minv: number = min === 0 ? 0 : Math.log(min);
    const maxv: number = Math.log(max);

    if (percentageDiff <= 0) {
      return min;
    } else if (percentageDiff >= 100) {
      return max;
    }

    const scale: number = (maxv - minv) / 100;

    return Math.floor(Math.exp(minv + scale * percentageDiff));
  },
};
