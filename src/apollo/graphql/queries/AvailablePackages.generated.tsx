import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import { MobilePackageFragmentDoc } from '../fragments/mobilePackage.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AvailablePackagesQueryVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;


export type AvailablePackagesQuery = { __typename?: 'Query', availablePackages?: { __typename?: 'GetAvailablePackagesResponse', message?: string | null, code?: Types.StatusCode | null, packages?: Array<{ __typename?: 'MobilePackage', price?: number | null, bandwidth?: number | null, smsCount?: number | null, minutesCount?: number | null, changeFee?: number | null, exitFine?: number | null, networkMode?: Types.NetworkMode | null, abroadPackage?: { __typename?: 'MobilePackage', price?: number | null, bandwidth?: number | null, smsCount?: number | null, minutesCount?: number | null, changeFee?: number | null, exitFine?: number | null, networkMode?: Types.NetworkMode | null } | null } | null> | null } | null };


export const AvailablePackagesDocument = gql`
    query AvailablePackages($token: String!) {
  availablePackages(token: $token) {
    message
    code
    packages {
      ...MobilePackage
    }
  }
}
    ${MobilePackageFragmentDoc}`;

/**
 * __useAvailablePackagesQuery__
 *
 * To run a query within a React component, call `useAvailablePackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailablePackagesQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAvailablePackagesQuery(baseOptions: Apollo.QueryHookOptions<AvailablePackagesQuery, AvailablePackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailablePackagesQuery, AvailablePackagesQueryVariables>(AvailablePackagesDocument, options);
      }
export function useAvailablePackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailablePackagesQuery, AvailablePackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailablePackagesQuery, AvailablePackagesQueryVariables>(AvailablePackagesDocument, options);
        }
export type AvailablePackagesQueryHookResult = ReturnType<typeof useAvailablePackagesQuery>;
export type AvailablePackagesLazyQueryHookResult = ReturnType<typeof useAvailablePackagesLazyQuery>;
export type AvailablePackagesQueryResult = Apollo.QueryResult<AvailablePackagesQuery, AvailablePackagesQueryVariables>;