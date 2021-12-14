const a = {};
Object.defineProperty(a, "b", {
  get: () => {
    return 2;
  },
});

console.log(a.b);
