export const getNumberOfNights = (startDate: Date, endDate: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.ceil((endDate.getTime() - startDate.getTime()) / oneDay));
    return diffDays;
}