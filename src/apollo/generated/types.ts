export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  ExpectedErrorType: any;
};

export type ChangePackage = {
  __typename?: 'ChangePackage';
  response?: Maybe<ChangePackageResponse>;
};

export type ChangePackageResponse = {
  __typename?: 'ChangePackageResponse';
  code?: Maybe<StatusCode>;
  message?: Maybe<Scalars['String']>;
};

export type CreateScraper = {
  __typename?: 'CreateScraper';
  response?: Maybe<CreateScraperResponse>;
};

export type CreateScraperResponse = {
  __typename?: 'CreateScraperResponse';
  code?: Maybe<StatusCode>;
  message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum CustomUserBank {
  /** Diskont */
  BnqDystvnt = 'BNQ_DYSTVNT',
  /** Habenleumi */
  BnqHbynlvmy = 'BNQ_HBYNLVMY',
  /** Hapoalim */
  BnqHpvLym = 'BNQ_HPV_LYM',
  /** Leumi */
  BnqLvmy = 'BNQ_LVMY',
  /** Mizrahi */
  BnqMzrkhy = 'BNQ_MZRKHY'
}

/** An enumeration. */
export enum CustomUserCellularSupplier {
  /** Celcom */
  Celcom = 'CELCOM',
  /** Partner */
  Partner = 'PARTNER',
  /** Pelephone */
  Pelephone = 'PELEPHONE'
}

export type GetAvailablePackagesResponse = {
  __typename?: 'GetAvailablePackagesResponse';
  code?: Maybe<StatusCode>;
  message?: Maybe<Scalars['String']>;
  packages?: Maybe<Array<Maybe<MobilePackage>>>;
};

export type GetCurrenctPackageResponse = {
  __typename?: 'GetCurrenctPackageResponse';
  code?: Maybe<StatusCode>;
  message?: Maybe<Scalars['String']>;
  package?: Maybe<MobilePackage>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  code?: Maybe<StatusCode>;
  message?: Maybe<Scalars['String']>;
};

export type LoginScraper = {
  __typename?: 'LoginScraper';
  response?: Maybe<LoginResponse>;
};

export type MobilePackage = {
  __typename?: 'MobilePackage';
  abroadPackage?: Maybe<MobilePackage>;
  bandwidth?: Maybe<Scalars['Int']>;
  changeFee?: Maybe<Scalars['Float']>;
  exitFine?: Maybe<Scalars['Float']>;
  minutesCount?: Maybe<Scalars['Int']>;
  networkMode?: Maybe<NetworkMode>;
  price?: Maybe<Scalars['Float']>;
  smsCount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePackage?: Maybe<ChangePackage>;
  createScraper?: Maybe<CreateScraper>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  createUser?: Maybe<Register>;
  login?: Maybe<LoginScraper>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyOtp?: Maybe<VerifyOtpWithScraper>;
};


export type MutationChangePackageArgs = {
  packageIndex: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationVerifyOtpArgs = {
  otp: Scalars['String'];
};

export enum NetworkMode {
  Fiveg = 'FIVEG',
  Fourg = 'FOURG',
  Lte = 'LTE',
  Threeg = 'THREEG'
}

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

export type Query = {
  __typename?: 'Query';
  availablePackages?: Maybe<GetAvailablePackagesResponse>;
  currentPackage?: Maybe<GetCurrenctPackageResponse>;
  me?: Maybe<UserNode>;
};


export type QueryAvailablePackagesArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type QueryCurrentPackageArgs = {
  token?: InputMaybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export enum StatusCode {
  Code200 = 'CODE200',
  Code201 = 'CODE201',
  Code400 = 'CODE400',
  Code500 = 'CODE500'
}

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  bank?: Maybe<CustomUserBank>;
  cellularSupplier?: Maybe<CustomUserCellularSupplier>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  fourDigit: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  idNumber: Scalars['String'];
  isActive: Scalars['Boolean'];
  isPermenant: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  lastLogin: Scalars['DateTime'];
  lastTokenUsed: Scalars['DateTime'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type VerifyOtpWithScraper = {
  __typename?: 'VerifyOtpWithScraper';
  response?: Maybe<VerifyOtpWithScraperResponse>;
};

export type VerifyOtpWithScraperResponse = {
  __typename?: 'VerifyOtpWithScraperResponse';
  code?: Maybe<StatusCode>;
  message?: Maybe<Scalars['String']>;
};
