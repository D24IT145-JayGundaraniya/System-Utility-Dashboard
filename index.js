import os from 'os';
import fs from 'fs';
import path from 'path';

const systemInfo = {
  osType: os.type(),
  totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
  freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
  cpuDetails: os.cpus().map(cpu => cpu.model),
};

const systemInfoText = `System Information:\n- OS Type: ${systemInfo.osType}\n- Total Memory: ${systemInfo.totalMemory}\n- Free Memory: ${systemInfo.freeMemory}\n- CPU Details: ${systemInfo.cpuDetails.join(', ')}`;

const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFilePath = path.join(logDir, 'system-info.txt');

fs.writeFileSync(logFilePath, systemInfoText);

console.log(systemInfoText);
console.log(`System information saved to: ${logFilePath}`);
