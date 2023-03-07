import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type UserNodeFragment = { __typename?: 'UserNode', id: string, email: string, name: string, phoneNumber: string, fourDigit: string, idNumber: string, cellularSupplier?: Types.CustomUserCellularSupplier | null, bank?: Types.CustomUserBank | null, isStaff: boolean, isActive: boolean, token: string, lastTokenUsed: any, dateJoined: any, lastLogin: any, isPermenant: boolean, pk?: number | null, archived?: boolean | null, verified?: boolean | null, secondaryEmail?: string | null };

export const UserNodeFragmentDoc = gql`
    fragment UserNode on UserNode {
  id
  email
  name
  phoneNumber
  fourDigit
  idNumber
  cellularSupplier
  bank
  isStaff
  isActive
  token
  lastTokenUsed
  dateJoined
  lastLogin
  isPermenant
  pk
  archived
  verified
  secondaryEmail
}
    `;