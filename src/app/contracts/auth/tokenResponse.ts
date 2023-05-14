import { Token } from './token';
export class TokenResponse {
  token: Token;
  succeeded: boolean;
  errors: string[];
}
