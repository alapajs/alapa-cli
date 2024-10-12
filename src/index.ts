import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "create <name>",
    "This create an new project",
    () => {
      console.log("Create project");
    },
    (argv) => {
      console.log(argv.name);
    }
  )
  .demandCommand(1)
  .parse();
