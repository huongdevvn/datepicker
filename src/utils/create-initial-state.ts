import type { DPConfig, DPReducerState } from '../types';
import { getCleanDate, getDateParts, newDate } from './date';
import { getCalendarStartDate } from './get-calendar-start-date';
import { getCurrentYearPosition } from './get-current-year-position';

export const createInitialState = (config: DPConfig): DPReducerState => {
  const {
    selectedDates,
    offsetDate,
    focusDate,
    dates: { minDate, maxDate },
    years,
  } = config;

  let initialOffsetDate = undefined;

  if (offsetDate) {
    initialOffsetDate = getCalendarStartDate(
      minDate,
      maxDate,
      getCleanDate(offsetDate),
    );
  } else {
    initialOffsetDate =
      selectedDates.length > 0
        ? selectedDates[selectedDates.length - 1]
        : getCalendarStartDate(minDate, maxDate, getCleanDate(newDate()));
  }

  return {
    focusDate,
    rangeEnd: null,
    offsetDate: initialOffsetDate,
    offsetYear: getCurrentYearPosition(
      getDateParts(initialOffsetDate).Y,
      years,
    ),
  };
};
