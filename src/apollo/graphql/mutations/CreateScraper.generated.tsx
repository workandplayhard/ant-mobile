import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateScraperMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type CreateScraperMutation = { __typename?: 'Mutation', createScraper?: { __typename?: 'CreateScraper', response?: { __typename?: 'CreateScraperResponse', message?: string | null, code?: Types.StatusCode | null } | null } | null };


export const CreateScraperDocument = gql`
    mutation CreateScraper {
  createScraper {
    response {
      message
      code
    }
  }
}
    `;
export type CreateScraperMutationFn = Apollo.MutationFunction<CreateScraperMutation, CreateScraperMutationVariables>;

/**
 * __useCreateScraperMutation__
 *
 * To run a mutation, you first call `useCreateScraperMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScraperMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScraperMutation, { data, loading, error }] = useCreateScraperMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateScraperMutation(baseOptions?: Apollo.MutationHookOptions<CreateScraperMutation, CreateScraperMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateScraperMutation, CreateScraperMutationVariables>(CreateScraperDocument, options);
      }
export type CreateScraperMutationHookResult = ReturnType<typeof useCreateScraperMutation>;
export type CreateScraperMutationResult = Apollo.MutationResult<CreateScraperMutation>;
export type CreateScraperMutationOptions = Apollo.BaseMutationOptions<CreateScraperMutation, CreateScraperMutationVariables>;