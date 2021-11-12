function readData(path) {
  return JSON.parse(fs.readFileSync(path));
}
