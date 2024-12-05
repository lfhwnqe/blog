// https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md
const instance = SimpleVue({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
  },
});

declare function SimpleVue<
  D extends Record<string, unknown>,
  C extends Record<string, unknown>,
  M extends Record<string, unknown>
>(options: {
  data: (this: never) => D;
  computed: { [K in keyof C]: (this: D, ...args: unknown[]) => C[K] };
  methods: {
    [K in keyof M]: (
      this: D & C & { [K in keyof M]: (...args: unknown[]) => M[K] }
    ) => M[K];
  };
}): any;
// declare function SimpleVue<>(): VueElement;
