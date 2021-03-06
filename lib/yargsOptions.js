// Object containing all yargs options http://yargs.js.org/docs/#api-optionskey-opt
// showInUi is an added boolean that controls if the option shows in the UI Info List

module.exports = {
  'h': {
    alias: 'help',
    showInUi: false
  }, 'i': {
    alias: 'info',
    boolean: true,
    describe: 'View online help',
    showInUi: false
  }, 'w': {
    alias: 'wizard',
    boolean: true,
    describe: 'Run a wizard to guide you through renaming files',
    showInUi: false
  }, 'u': {
    alias: 'undo',
    boolean: true,
    describe: 'Undo previous rename operation',
    showInUi: false
  }, 'r': {
    alias: 'regex',
    describe: 'See RegEx section of online help for more information',
    type: 'string',
    showInUi: true
  }, 'k': {
    alias: 'keep',
    boolean: true,
    describe: 'Keep both files when output file name already exists (append a number)',
    showInUi: true
  }, 'f': {
    alias: 'force',
    boolean: true,
    describe: 'Force overwrite without prompt when output file name already exists',
    showInUi: true
  }, 's': {
    alias: 'sim',
    boolean: true,
    describe: 'Simulate rename and just print new file names',
    showInUi: true
  }, 'n': {
    alias: 'noindex',
    boolean: true,
    describe: 'Do not append an index when renaming multiple files',
    showInUi: true
  }, 'v': {
    alias: 'verbose',
    boolean: true,
    describe: 'Print all rename operations to be completed and confirm before proceeding',
    showInUi: true
  }, 'notrim': {
    boolean: true,
    describe: 'Do not trim whitespace at beginning or end of ouput file name',
    showInUi: true
  }
};