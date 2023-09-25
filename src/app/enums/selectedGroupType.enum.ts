export enum GroupType {
  firma = 1,
  sehir = 2,
  grup = 3
}

export const groupTypeDescriptions: Record<keyof typeof GroupType, string> = {
  firma: 'firma',
  sehir: 'sehir',
  grup: 'grup'
};
