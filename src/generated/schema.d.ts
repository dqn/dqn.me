export type __nitrogql_schema = {
  query: Query;
};

type __Beautify<Obj> = { [K in keyof Obj]: Obj[K] } & {};
export type __SelectionSet<Orig, Obj, Others> =
  __Beautify<Pick<{
    [K in keyof Orig]: Obj extends Record<K, infer V> ? V : unknown
  }, Extract<keyof Orig, keyof Obj>> & Others>;




export type Boolean = boolean;

export type ID = string;

export type Int = number;

export type Float = number;

export type String = string;

export type Company = {
  __typename: "Company";
  id: ID;
  name: String;
  businesses: (String)[];
  website: String;
};

export type Link = {
  __typename: "Link";
  id: ID;
  name: String;
  url: String;
};

export type Profile = {
  __typename: "Profile";
  id: ID;
  name: String;
  bio: String;
  avatarUrl: String;
  pronouns: String;
  birthday: String;
  email: String;
  company: Company | null;
  location: String;
  loves: (String)[];
  links: (Link)[];
};

export type Query = {
  __typename: "Query";
  profile: Profile;
};


//# sourceMappingURL=schema.d.ts.map
