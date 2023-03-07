import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ChangePackageKeySpecifier = ('response' | ChangePackageKeySpecifier)[];
export type ChangePackageFieldPolicy = {
  response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangePackageResponseKeySpecifier = ('code' | 'message' | ChangePackageResponseKeySpecifier)[];
export type ChangePackageResponseFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateScraperKeySpecifier = ('response' | CreateScraperKeySpecifier)[];
export type CreateScraperFieldPolicy = {
  response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateScraperResponseKeySpecifier = ('code' | 'message' | CreateScraperResponseKeySpecifier)[];
export type CreateScraperResponseFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetAvailablePackagesResponseKeySpecifier = ('code' | 'message' | 'packages' | GetAvailablePackagesResponseKeySpecifier)[];
export type GetAvailablePackagesResponseFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  message?: FieldPolicy<any> | FieldReadFunction<any>,
  packages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetCurrenctPackageResponseKeySpecifier = ('code' | 'message' | 'package' | GetCurrenctPackageResponseKeySpecifier)[];
export type GetCurrenctPackageResponseFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  message?: FieldPolicy<any> | FieldReadFunction<any>,
  package?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResponseKeySpecifier = ('code' | 'message' | LoginResponseKeySpecifier)[];
export type LoginResponseFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginScraperKeySpecifier = ('response' | LoginScraperKeySpecifier)[];
export type LoginScraperFieldPolicy = {
  response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MobilePackageKeySpecifier = ('abroadPackage' | 'bandwidth' | 'changeFee' | 'exitFine' | 'minutesCount' | 'networkMode' | 'price' | 'smsCount' | MobilePackageKeySpecifier)[];
export type MobilePackageFieldPolicy = {
  abroadPackage?: FieldPolicy<any> | FieldReadFunction<any>,
  bandwidth?: FieldPolicy<any> | FieldReadFunction<any>,
  changeFee?: FieldPolicy<any> | FieldReadFunction<any>,
  exitFine?: FieldPolicy<any> | FieldReadFunction<any>,
  minutesCount?: FieldPolicy<any> | FieldReadFunction<any>,
  networkMode?: FieldPolicy<any> | FieldReadFunction<any>,
  price?: FieldPolicy<any> | FieldReadFunction<any>,
  smsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('changePackage' | 'createScraper' | 'createUser' | 'login' | 'tokenAuth' | 'verifyOtp' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  changePackage?: FieldPolicy<any> | FieldReadFunction<any>,
  createScraper?: FieldPolicy<any> | FieldReadFunction<any>,
  createUser?: FieldPolicy<any> | FieldReadFunction<any>,
  login?: FieldPolicy<any> | FieldReadFunction<any>,
  tokenAuth?: FieldPolicy<any> | FieldReadFunction<any>,
  verifyOtp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObtainJSONWebTokenKeySpecifier = ('errors' | 'success' | 'token' | 'unarchiving' | 'user' | ObtainJSONWebTokenKeySpecifier)[];
export type ObtainJSONWebTokenFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>,
  success?: FieldPolicy<any> | FieldReadFunction<any>,
  token?: FieldPolicy<any> | FieldReadFunction<any>,
  unarchiving?: FieldPolicy<any> | FieldReadFunction<any>,
  user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('availablePackages' | 'currentPackage' | 'me' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  availablePackages?: FieldPolicy<any> | FieldReadFunction<any>,
  currentPackage?: FieldPolicy<any> | FieldReadFunction<any>,
  me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterKeySpecifier = ('errors' | 'success' | 'token' | RegisterKeySpecifier)[];
export type RegisterFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>,
  success?: FieldPolicy<any> | FieldReadFunction<any>,
  token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserNodeKeySpecifier = ('archived' | 'bank' | 'cellularSupplier' | 'dateJoined' | 'email' | 'fourDigit' | 'id' | 'idNumber' | 'isActive' | 'isPermenant' | 'isStaff' | 'lastLogin' | 'lastTokenUsed' | 'name' | 'phoneNumber' | 'pk' | 'secondaryEmail' | 'token' | 'verified' | UserNodeKeySpecifier)[];
export type UserNodeFieldPolicy = {
  archived?: FieldPolicy<any> | FieldReadFunction<any>,
  bank?: FieldPolicy<any> | FieldReadFunction<any>,
  cellularSupplier?: FieldPolicy<any> | FieldReadFunction<any>,
  dateJoined?: FieldPolicy<any> | FieldReadFunction<any>,
  email?: FieldPolicy<any> | FieldReadFunction<any>,
  fourDigit?: FieldPolicy<any> | FieldReadFunction<any>,
  id?: FieldPolicy<any> | FieldReadFunction<any>,
  idNumber?: FieldPolicy<any> | FieldReadFunction<any>,
  isActive?: FieldPolicy<any> | FieldReadFunction<any>,
  isPermenant?: FieldPolicy<any> | FieldReadFunction<any>,
  isStaff?: FieldPolicy<any> | FieldReadFunction<any>,
  lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
  lastTokenUsed?: FieldPolicy<any> | FieldReadFunction<any>,
  name?: FieldPolicy<any> | FieldReadFunction<any>,
  phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
  pk?: FieldPolicy<any> | FieldReadFunction<any>,
  secondaryEmail?: FieldPolicy<any> | FieldReadFunction<any>,
  token?: FieldPolicy<any> | FieldReadFunction<any>,
  verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyOtpWithScraperKeySpecifier = ('response' | VerifyOtpWithScraperKeySpecifier)[];
export type VerifyOtpWithScraperFieldPolicy = {
  response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyOtpWithScraperResponseKeySpecifier = ('code' | 'message' | VerifyOtpWithScraperResponseKeySpecifier)[];
export type VerifyOtpWithScraperResponseFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>,
  message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
  ChangePackage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ChangePackageKeySpecifier | (() => undefined | ChangePackageKeySpecifier),
    fields?: ChangePackageFieldPolicy,
  },
  ChangePackageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ChangePackageResponseKeySpecifier | (() => undefined | ChangePackageResponseKeySpecifier),
    fields?: ChangePackageResponseFieldPolicy,
  },
  CreateScraper?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CreateScraperKeySpecifier | (() => undefined | CreateScraperKeySpecifier),
    fields?: CreateScraperFieldPolicy,
  },
  CreateScraperResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CreateScraperResponseKeySpecifier | (() => undefined | CreateScraperResponseKeySpecifier),
    fields?: CreateScraperResponseFieldPolicy,
  },
  GetAvailablePackagesResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | GetAvailablePackagesResponseKeySpecifier | (() => undefined | GetAvailablePackagesResponseKeySpecifier),
    fields?: GetAvailablePackagesResponseFieldPolicy,
  },
  GetCurrenctPackageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | GetCurrenctPackageResponseKeySpecifier | (() => undefined | GetCurrenctPackageResponseKeySpecifier),
    fields?: GetCurrenctPackageResponseFieldPolicy,
  },
  LoginResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | LoginResponseKeySpecifier | (() => undefined | LoginResponseKeySpecifier),
    fields?: LoginResponseFieldPolicy,
  },
  LoginScraper?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | LoginScraperKeySpecifier | (() => undefined | LoginScraperKeySpecifier),
    fields?: LoginScraperFieldPolicy,
  },
  MobilePackage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MobilePackageKeySpecifier | (() => undefined | MobilePackageKeySpecifier),
    fields?: MobilePackageFieldPolicy,
  },
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
    fields?: MutationFieldPolicy,
  },
  Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
    fields?: NodeFieldPolicy,
  },
  ObtainJSONWebToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ObtainJSONWebTokenKeySpecifier | (() => undefined | ObtainJSONWebTokenKeySpecifier),
    fields?: ObtainJSONWebTokenFieldPolicy,
  },
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
    fields?: QueryFieldPolicy,
  },
  Register?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | RegisterKeySpecifier | (() => undefined | RegisterKeySpecifier),
    fields?: RegisterFieldPolicy,
  },
  UserNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserNodeKeySpecifier | (() => undefined | UserNodeKeySpecifier),
    fields?: UserNodeFieldPolicy,
  },
  VerifyOtpWithScraper?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | VerifyOtpWithScraperKeySpecifier | (() => undefined | VerifyOtpWithScraperKeySpecifier),
    fields?: VerifyOtpWithScraperFieldPolicy,
  },
  VerifyOtpWithScraperResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | VerifyOtpWithScraperResponseKeySpecifier | (() => undefined | VerifyOtpWithScraperResponseKeySpecifier),
    fields?: VerifyOtpWithScraperResponseFieldPolicy,
  }
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;