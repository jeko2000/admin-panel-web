import * as D from 'io-ts/Decoder'

const isDate = (u: unknown): u is Date => u instanceof Date

export const date: D.Decoder<unknown, Date> = D.fromRefinement(isDate, 'Date')
