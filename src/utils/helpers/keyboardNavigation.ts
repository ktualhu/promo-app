export enum EDir {
  'left',
  'up',
  'right',
  'down',
}

export function keyboardArrowNav(dir: EDir, value: number) {
  switch (dir) {
    case EDir.left:
      if (value === -1) {
        return 1;
      } else if (value === 11) {
        return 0 as number;
      } else if (!value) {
        return 11;
      } else {
        if (value === 1 || (value - 1) % 3 === 0) {
          return (value += 2);
        } else {
          return value - 1;
        }
      }
    case EDir.up:
      if (value === -1) {
        return 1;
      } else {
        if (value === 1 || value === 2) {
          return 11;
        } else if (!value) {
          return 9;
        } else if (value === 3) {
          return 0;
        } else {
          return (value -= 3);
        }
      }
    case EDir.right:
      if (value === -1) {
        return 1;
      } else {
        if (value && value % 3 === 0) {
          return (value -= 2);
        } else if (!value) {
          return 11;
        } else if (value === 11) {
          return 0;
        } else {
          return value + 1;
        }
      }
    case EDir.down:
      if (value === -1) {
        return 1;
      } else {
        if (!value) {
          return 3;
        } else if (value === 7 || value === 8) {
          return 11;
        } else if (value === 9) {
          return 0 as number;
        } else if (value === 11) {
          return 1;
        } else {
          return (value += 3);
        }
      }
  }
}
