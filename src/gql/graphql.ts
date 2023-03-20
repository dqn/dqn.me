/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: "Company";
  businesses: Array<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  website: Scalars["String"];
};

export type Link = {
  __typename?: "Link";
  id: Scalars["ID"];
  name: Scalars["String"];
  url: Scalars["String"];
};

export type Profile = {
  __typename?: "Profile";
  birthday: Scalars["String"];
  company?: Maybe<Company>;
  email: Scalars["String"];
  id: Scalars["ID"];
  links: Array<Link>;
  location: Scalars["String"];
  loves: Array<Scalars["String"]>;
  name: Scalars["String"];
  pronouns: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  profile: Profile;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: "Query";
  profile: {
    __typename?: "Profile";
    loves: Array<string>;
    links: Array<{
      __typename?: "Link";
      id: string;
      name: string;
      url: string;
    }>;
  };
};

export const ProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Profile" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "profile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "loves" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "links" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
