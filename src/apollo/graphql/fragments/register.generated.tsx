import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type RegisterFragment = { __typename?: 'Register', success?: boolean | null, errors?: any | null, token?: string | null };

export const RegisterFragmentDoc = gql`
    fragment Register on Register {
  success
  errors
  token
}
    `;