import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import { UserNodeFragmentDoc } from '../fragments/userNode.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', id: string, email: string, name: string, phoneNumber: string, fourDigit: string, idNumber: string, cellularSupplier?: Types.CustomUserCellularSupplier | null, bank?: Types.CustomUserBank | null, isStaff: boolean, isActive: boolean, token: string, lastTokenUsed: any, dateJoined: any, lastLogin: any, isPermenant: boolean, pk?: number | null, archived?: boolean | null, verified?: boolean | null, secondaryEmail?: string | null } | null };


export const MeDocument = gql`
    query Me {
  me {
    ...UserNode
  }
}
    ${UserNodeFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;