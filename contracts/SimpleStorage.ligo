function main (const newValue : string;  const storedValue : string) : (list(operation) * string) is
  block { storedValue := newValue } with ((nil : list(operation)), storedValue)
