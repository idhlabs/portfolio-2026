import { lsCommand } from "./ls";
import { cdCommand } from "./cd";
import { catCommand } from "./cat";
import { pwdCommand } from "./pwd";
import { clearCommand } from "./clear";
import { helpCommand } from "./help";
import { whoamiCommand } from "./whoami";
import type { Command } from "../../../types/terminal";

export const commands: Record<string, Command> = {
  ls: lsCommand,
  cd: cdCommand,
  cat: catCommand,
  pwd: pwdCommand,
  clear: clearCommand,
  help: helpCommand,
  whoami: whoamiCommand,
};
