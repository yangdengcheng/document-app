// 通过nestjs执行git命令
import { exec } from 'child_process';

export const execGit = async (cmd: string) => {
  const { stdout, stderr } = await exec(cmd, { cwd: process.cwd() });
  if (stderr) {
    throw new Error(stderr);
  }
  return stdout;
};
