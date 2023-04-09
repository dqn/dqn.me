import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type * as Schema from "../generated/schema";

type ProfileQueryResult = Schema.__SelectionSet<Schema.Query, {
  profile: Schema.__SelectionSet<Schema.Profile, {
    id: Schema.ID;
    name: Schema.String;
    bio: Schema.String;
    loves: (Schema.String)[];
    links: (Schema.__SelectionSet<Schema.Link, {
      id: Schema.ID;
      name: Schema.String;
      url: Schema.String;
    }, {}>)[];
  }, {}>;
}, {}>;

type ProfileQueryVariables = {};

declare const ProfileQuery: TypedDocumentNode<ProfileQueryResult, ProfileQueryVariables>;

export { ProfileQuery as default };


//# sourceMappingURL=Profile.d.graphql.ts.map
