#!/usr/bin/env node
// var gitops = require('./git-opt');
var program = require('commander');
// Object.keys(gitops).forEach(function (key) {
//   // do something with obj
//   console.log(".option('" + key + "','" + gitops[key] + "', someFunct)");
// });

console.log("wow");

program
  .version('0.0.1')
  // .option('-C <path>'           ,'Run as if git was started in <path> instead of the current working directory. When multiple -C options are given, each subsequent non-absolute -C <path> is interpreted relative to the preceding -C <path>.\n\nThis option affects options that expect path name like --git-dir and --work-tree in that their interpretations of the path names would be made relative to the working directory caused by the -C option. For example the following invocations are equivalent:\n\n`git --git-dir=a.git --work-tree=b -C c status`\n\n`git --git-dir=c/a.git --work-tree=c/b status`', someFunct)
  // .option('-c <name>=<value>'   ,'Pass a configuration parameter to the command. The value given will override values from configuration files. The <name> is expected in the same format as listed by git config (subkeys separated by dots).\n\nNote that omitting the = in git -c foo.bar ... is allowed and sets foo.bar to the boolean true value (just like [foo]bar would in a config file). Including the equals but with an empty value (like git -c foo.bar= ...) sets foo.bar to the empty string.', someFunct)
  // .option('--exec-path[=<path>]','Path to wherever your core Git programs are installed. This can also be controlled by setting the GIT_EXEC_PATH environment variable. If no path is given, git will print the current setting and then exit.', someFunct)
  // .option('--html-path'         ,'Print the path, without trailing slash, where Git’s HTML documentation is installed and exit.', someFunct)
  // .option('--man-path'          ,'Print the manpath (see man(1)) for the man pages for this version of Git and exit.', someFunct)
  // .option('--info-path'         ,'Print the path where the Info files documenting this version of Git are installed and exit.', someFunct)
  // .option('-p, --paginate'      ,'Pipe all output into less (or if set, $PAGER) if standard output is a terminal. This overrides the pager.<cmd> configuration options (see the 'Configuration Mechanism' section below).', someFunct)
  // .option('--no-pager'          ,'Do not pipe Git output into a pager.', someFunct)
  // .option('--git-dir=<path>'    ,'Set the path to the repository. This can also be controlled by setting the GIT_DIR environment variable. It can be an absolute path or relative path to current working directory.', someFunct)
  // .option('--work-tree=<path>'  ,'Set the path to the working tree. It can be an absolute path or a path relative to the current working directory. This can also be controlled by setting the GIT_WORK_TREE environment variable and the core.worktree configuration variable (see core.worktree in git-config(1) for a more detailed discussion).', someFunct)
  // .option('--namespace=<path>'  ,'Set the Git namespace. See gitnamespaces(7) for more details. Equivalent to setting the GIT_NAMESPACE environment variable.', someFunct)
  // .option('--bare'              ,'Treat the repository as a bare repository. If GIT_DIR environment is not set, it is set to the current working directory.', someFunct)
  // .option('--no-replace-objects','Do not use replacement refs to replace Git objects. See git-replace(1) for more information.', someFunct)
  // .option('--literal-pathspecs' ,'Treat pathspecs literally (i.e. no globbing, no pathspec magic). This is equivalent to setting the GIT_LITERAL_PATHSPECS environment variable to 1.', someFunct)
  // .option('--glob-pathspecs'    ,'Add "glob" magic to all pathspec. This is equivalent to setting the GIT_GLOB_PATHSPECS environment variable to 1. Disabling globbing on individual pathspecs can be done using pathspec magic ":(literal)"', someFunct)
  // .option('--noglob-pathspecs'  ,'Add "literal" magic to all pathspec. This is equivalent to setting the GIT_NOGLOB_PATHSPECS environment variable to 1. Enabling globbing on individual pathspecs can be done using pathspec magic ":(glob)"', someFunct)
  // .option('--icase-pathspecs'   ,'Add "icase" magic to all pathspec. This is equivalent to setting the GIT_ICASE_PATHSPECS environment variable to 1.', someFunct)
  .command('add [args]', 'test')
  .command('commit [args]', 'test')
  .command('config [args]', 'test')
  .command('diff [args]', 'test')
  .command('init [args]', 'test')
  .command('log [args]', 'test')
  .command('status [args]', 'test')
  .parse(process.argv);
