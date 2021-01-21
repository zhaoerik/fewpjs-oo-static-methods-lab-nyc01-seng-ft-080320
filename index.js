class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }

  static titleize(string) {
    let exceptions = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let results = []
    let arrayString = string.split(' ')
    for (let i = 0; i < arrayString.length; i++) {
      if (exceptions.includes(arrayString[i])) {
        results.push(arrayString[i])
      } else {
        results.push(this.capitalize(arrayString[i]))
      }
    }
    return results.join(" ")
  }
  

}