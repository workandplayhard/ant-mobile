import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginScraperMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type LoginScraperMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginScraper', response?: { __typename?: 'LoginResponse', message?: string | null, code?: Types.StatusCode | null } | null } | null };


export const LoginScraperDocument = gql`
    mutation LoginScraper {
  login {
    response {
      message
      code
    }
  }
}
    `;
export type LoginScraperMutationFn = Apollo.MutationFunction<LoginScraperMutation, LoginScraperMutationVariables>;

/**
 * __useLoginScraperMutation__
 *
 * To run a mutation, you first call `useLoginScraperMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginScraperMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginScraperMutation, { data, loading, error }] = useLoginScraperMutation({
 *   variables: {
 *   },
 * });
 */
export function useLoginScraperMutation(baseOptions?: Apollo.MutationHookOptions<LoginScraperMutation, LoginScraperMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginScraperMutation, LoginScraperMutationVariables>(LoginScraperDocument, options);
      }
export type LoginScraperMutationHookResult = ReturnType<typeof useLoginScraperMutation>;
export type LoginScraperMutationResult = Apollo.MutationResult<LoginScraperMutation>;
export type LoginScraperMutationOptions = Apollo.BaseMutationOptions<LoginScraperMutation, LoginScraperMutationVariables>;