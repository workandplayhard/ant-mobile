import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import { UserNodeFragmentDoc } from '../fragments/userNode.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokenAuthMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', success?: boolean | null, errors?: any | null, token?: string | null, unarchiving?: boolean | null, user?: { __typename?: 'UserNode', id: string, email: string, name: string, phoneNumber: string, fourDigit: string, idNumber: string, cellularSupplier?: Types.CustomUserCellularSupplier | null, bank?: Types.CustomUserBank | null, isStaff: boolean, isActive: boolean, token: string, lastTokenUsed: any, dateJoined: any, lastLogin: any, isPermenant: boolean, pk?: number | null, archived?: boolean | null, verified?: boolean | null, secondaryEmail?: string | null } | null } | null };


export const TokenAuthDocument = gql`
    mutation TokenAuth($password: String!, $email: String) {
  tokenAuth(password: $password, email: $email) {
    success
    errors
    token
    user {
      ...UserNode
    }
    unarchiving
  }
}
    ${UserNodeFragmentDoc}`;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;