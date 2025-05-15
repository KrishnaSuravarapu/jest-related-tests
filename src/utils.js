exports.log = function (message) {
    const date = new Date();
    const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(`[${formattedDate}] ${message}`);
}