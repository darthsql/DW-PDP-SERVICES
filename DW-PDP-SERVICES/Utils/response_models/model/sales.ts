export enum RecordType {
  "DAY" = "day",
  "PERIOD" = "period"
}

export type SalesDocument = {
  id: string,
  locationId: string,
  unixTime: number,
  periodStartLocal: string,
  sales: number,
  count: number,
  lastYearSales: number,
  lastYearCount: number,
  salesRecordType: RecordType,
  createdOn: string
}