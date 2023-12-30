export type ArrayWithNames = [string, string, string];

type Name = {
    generatedNames: {
      chinese: ArrayWithNames | [],
      fantasy: ArrayWithNames | [],
      japanese: ArrayWithNames | []
    }
  }

export default Name;
