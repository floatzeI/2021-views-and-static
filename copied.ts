export enum AccountStatus {
    'OK' = 1,
    'Suppressed',
    'Deleted',
    'Poisoned',
    'MustValidateEmail',
    'Forgotten',
}

export interface IUserInfo {
    userId: number;
    username: string;
    created: string;
    theme: string;
    status: AccountStatus;
    isModerator: boolean;
    isAdmin: boolean;
    sessionKey: number;
    isImpersonating: boolean;
    isGame?: boolean;
}

