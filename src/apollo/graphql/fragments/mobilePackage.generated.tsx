import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type MobilePackageFragment = { __typename?: 'MobilePackage', price?: number | null, bandwidth?: number | null, smsCount?: number | null, minutesCount?: number | null, changeFee?: number | null, exitFine?: number | null, networkMode?: Types.NetworkMode | null, abroadPackage?: { __typename?: 'MobilePackage', price?: number | null, bandwidth?: number | null, smsCount?: number | null, minutesCount?: number | null, changeFee?: number | null, exitFine?: number | null, networkMode?: Types.NetworkMode | null } | null };

export const MobilePackageFragmentDoc = gql`
    fragment MobilePackage on MobilePackage {
  price
  bandwidth
  smsCount
  minutesCount
  changeFee
  exitFine
  networkMode
  abroadPackage {
    price
    bandwidth
    smsCount
    minutesCount
    changeFee
    exitFine
    networkMode
  }
}
    `;