import { format, getYear, isThisYear, isToday } from "date-fns";

export const getCurrentYear = () => {
    return getYear(new Date());
}

export const getLongDate = (date: Date) => {
    return format(date, "MMM dd, y p");
}

export const getShortDate = (date: Date) => {
    if (isToday(date)) {
        return format(date, "p");
    } else if (isThisYear(date)) {
        return format(date, "MMM dd");
    } else {
        return format(date, "MMM y");
    }
}