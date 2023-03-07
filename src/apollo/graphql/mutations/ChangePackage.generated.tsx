import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ChangePackageMutationVariables = Types.Exact<{
  packageIndex: Types.Scalars['String'];
}>;


export type ChangePackageMutation = { __typename?: 'Mutation', changePackage?: { __typename?: 'ChangePackage', response?: { __typename?: 'ChangePackageResponse', message?: string | null, code?: Types.StatusCode | null } | null } | null };


export const ChangePackageDocument = gql`
    mutation ChangePackage($packageIndex: String!) {
  changePackage(packageIndex: $packageIndex) {
    response {
      message
      code
    }
  }
}
    `;
export type ChangePackageMutationFn = Apollo.MutationFunction<ChangePackageMutation, ChangePackageMutationVariables>;

/**
 * __useChangePackageMutation__
 *
 * To run a mutation, you first call `useChangePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePackageMutation, { data, loading, error }] = useChangePackageMutation({
 *   variables: {
 *      packageIndex: // value for 'packageIndex'
 *   },
 * });
 */
export function useChangePackageMutation(baseOptions?: Apollo.MutationHookOptions<ChangePackageMutation, ChangePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePackageMutation, ChangePackageMutationVariables>(ChangePackageDocument, options);
      }
export type ChangePackageMutationHookResult = ReturnType<typeof useChangePackageMutation>;
export type ChangePackageMutationResult = Apollo.MutationResult<ChangePackageMutation>;
export type ChangePackageMutationOptions = Apollo.BaseMutationOptions<ChangePackageMutation, ChangePackageMutationVariables>;