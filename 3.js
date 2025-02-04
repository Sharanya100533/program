const os = require('os');
function logUptime() {
    const uptimeSeconds = os.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);

    console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
}
logUptime();
