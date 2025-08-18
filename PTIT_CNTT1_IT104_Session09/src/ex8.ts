function createObject<K extends string, V>(keys: K[], values: V[]): Record<K, V> {
  const result = {} as Record<K, V>;
  for (let i = 0; i < keys.length && i < values.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

const keys = ['name', 'age', 'email'];
const values = ['Alice', 25, 'alice@example.com'];
console.log(createObject(keys, values));