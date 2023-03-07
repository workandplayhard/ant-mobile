import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import { MobilePackageFragmentDoc } from '../fragments/mobilePackage.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentPackageQueryVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;


export type CurrentPackageQuery = { __typename?: 'Query', currentPackage?: { __typename?: 'GetCurrenctPackageResponse', message?: string | null, code?: Types.StatusCode | null, package?: { __typename?: 'MobilePackage', price?: number | null, bandwidth?: number | null, smsCount?: number | null, minutesCount?: number | null, changeFee?: number | null, exitFine?: number | null, networkMode?: Types.NetworkMode | null, abroadPackage?: { __typename?: 'MobilePackage', price?: number | null, bandwidth?: number | null, smsCount?: number | null, minutesCount?: number | null, changeFee?: number | null, exitFine?: number | null, networkMode?: Types.NetworkMode | null } | null } | null } | null };


export const CurrentPackageDocument = gql`
    query CurrentPackage($token: String!) {
  currentPackage(token: $token) {
    message
    code
    package {
      ...MobilePackage
    }
  }
}
    ${MobilePackageFragmentDoc}`;

/**
 * __useCurrentPackageQuery__
 *
 * To run a query within a React component, call `useCurrentPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentPackageQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCurrentPackageQuery(baseOptions: Apollo.QueryHookOptions<CurrentPackageQuery, CurrentPackageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentPackageQuery, CurrentPackageQueryVariables>(CurrentPackageDocument, options);
      }
export function useCurrentPackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentPackageQuery, CurrentPackageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentPackageQuery, CurrentPackageQueryVariables>(CurrentPackageDocument, options);
        }
export type CurrentPackageQueryHookResult = ReturnType<typeof useCurrentPackageQuery>;
export type CurrentPackageLazyQueryHookResult = ReturnType<typeof useCurrentPackageLazyQuery>;
export type CurrentPackageQueryResult = Apollo.QueryResult<CurrentPackageQuery, CurrentPackageQueryVariables>;