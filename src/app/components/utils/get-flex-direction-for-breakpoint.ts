export const getFlexDirectionForBreakpoint = (reverse: boolean, stacked: boolean, breakpoint?: string) => {
  if (reverse === null && stacked === false) {
    return null;
  }

  let direction = 'flex-row';

  if (reverse === true && stacked === false) {
    direction = 'flex-row-reverse';
  } else if (reverse === true && stacked === true) {
    direction = 'flex-col-reverse';
  } else if (stacked === true) {
    direction = 'flex-col';
  }

  return breakpoint ? `${direction}-${breakpoint}` : direction;
};
