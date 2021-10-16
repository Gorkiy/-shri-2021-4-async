module.exports = function (Homework) {
    const reduce = async function (array, fn, initialValue, cb) {
        const length = await new Promise(array.length);
        const isOnlyItem = await new Promise((resolve) => Homework.equal(0, length, resolve));

        if (isOnlyItem) {
            cb(initialValue);
            return;
        }

        const current = await new Promise(array.pop);
        initialValue = await new Promise((resolve) => fn(initialValue, current, 0, array, resolve));

        await reduce(array, fn, initialValue, cb);
    }

    return (array, fn, initialValue, cb) => {
        return reduce(array, fn, initialValue, cb);
    }
}