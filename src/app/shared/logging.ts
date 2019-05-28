import { LogPrimaryKey } from "./log.primary.key";

export interface Logging {
    logPrimaryKey: LogPrimaryKey;
    path: string;
    message: string;
    details: string;
}