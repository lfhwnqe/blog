// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

type replaced1 = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
type Replace<
  T extends string,
  From extends string,
  To extends string
> = T extends ""
  ? T
  : T extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : T;

// ---我是分割线---

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

type replaced2 = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = T extends ""
  ? T
  : T extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : T;
