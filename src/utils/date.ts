import { DatePart, LocaleConfig } from '../types';

/*
 * We need this function to eliminate time from the comparison.
 * All date that comes to DP should go through this function.
 */
export const getCleanDate = (d: Date): Date =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const isSame = (d1: Date, d2: Date): boolean =>
  d1.toString() === d2.toString();

export const isBefore = (d1: Date, d2: Date): boolean => d1 < d2;

export const isAfter = (d1: Date, d2: Date): boolean => d1 > d2;

export const isBetween = (start: Date, d: Date, end: Date) =>
  isAfter(d, start) && isBefore(d, end);

export const daysInMonth = (d: Date): number =>
  new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

export const getFirstMonthDay = (d: Date): Date =>
  new Date(d.getFullYear(), d.getMonth(), 1);

export const addToDate = (d: Date, value: number, part: DatePart) =>
  new Date(
    d.getFullYear() + (part === 'year' ? value : 0),
    d.getMonth() + (part === 'month' ? value : 0),
    d.getDate() + (part === 'date' ? value : 0),
  );

export const subtractFromDate = (d: Date, value: number, part: DatePart) =>
  addToDate(d, 0 - value, part);

export const sortDatesAsc = (a: Date, b: Date) => a.getTime() - b.getTime();

// Format date
export const formatMonthName = (d: Date, { locale, monthName }: LocaleConfig) =>
  d.toLocaleDateString(locale, { month: monthName });

export const formatWeekdays = (d: Date, { locale, weekday }: LocaleConfig) =>
  d.toLocaleDateString(locale, { weekday: weekday });

export const formatDate = (d: Date, { locale, options }: LocaleConfig) =>
  d.toLocaleDateString(locale, options);

export const formatDay = (
  d: Date,
  { locale, options: { day } }: LocaleConfig,
) => d.toLocaleDateString(locale, { day });

export const formatMonth = (
  d: Date,
  { locale, options: { month } }: LocaleConfig,
) => d.toLocaleDateString(locale, { month });

export const formatYear = (
  d: Date,
  { locale, options: { year } }: LocaleConfig,
) => d.toLocaleDateString(locale, { year });