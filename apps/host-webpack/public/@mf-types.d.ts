
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Counter';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Counter' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Counter') :any;