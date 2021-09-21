export interface ServerLog {
  message: string;
  url: string;
  userName: string | undefined;
  stack: string;
}
