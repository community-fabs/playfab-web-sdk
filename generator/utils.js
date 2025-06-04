export function getBuildIdentifier(sdkName) {
  const { BUILD_PREFIX = "Custom_" } = process.env;

  return `${BUILD_PREFIX}${sdkName}`;
}

/**
 * Word wraps a string to fit a particular width
 * @param width Number, default 120
 * @param brk string, inserted on wrap locations, default newline
 * @param cut boolean, default false, I think it removes everything after the wordwrap, instead of inserting brk
 * @returns {string}
 */
export function wordWrap(string, width = 120, brk = "\n", cut = false) {
  var regex = '.{1,' + width + '}(\\s|$)' + (cut ? '|.{' + width + '}|.+$' : '|\\S+?(\\s|$)');
  var regres = string.match(RegExp(regex, 'g'));
  if (regres) {
    var filtered = [];
    for (var i = 0; i < regres.length; i++) {
      if (!regres[i])
        continue;
      var trimmedLine = regres[i].trim();
      if (trimmedLine.length > 0)
        filtered.push(trimmedLine);
    }
    return filtered.join(brk);
  }
  return this;
};