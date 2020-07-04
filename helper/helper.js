export const convertTime = (mysqlTime) => {
    if (mysqlTime) {
        const date = mysqlTime.search('T');
        return mysqlTime.slice(0, date);
    }
    return mysqlTime;
}

