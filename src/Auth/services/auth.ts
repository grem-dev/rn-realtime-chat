import { Ok, ServerError, Unauthorized } from "../../global/services/response/NetworkRequest";
import { AuthConstants } from "../constants"

const base_url = `${AuthConstants.AUTH_API}/api/v1`;

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  email: string;
  password: string;
  name: string;
}


async function SignIn({ email, password }: SignInProps) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password
      })
    }
    const res = await fetch(`${base_url}/accounts/login`, options);
    if (res.status !== 200) {
      throw Error(res.status.toString());
    }
    return res.json();
  } catch (err) {
    return err;
  }
};


async function SignUp({ email, password, name }: SignUpProps) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password, name
      })
    }
    const res = await fetch(`${base_url}/accounts`, options);
    return res.json();
  } catch (err) {
    return null;
  }
};

interface VerifyCredentialsProps {
  token: string;
  refreshToken: string;
}

async function VerifyCredentials({ token, refreshToken }: VerifyCredentialsProps) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token, refreshToken
      })
    }
    const res = await fetch(`${base_url}/accounts/verifyCredentials`, options);

    if (res.status == 401)
      return Unauthorized();

    const payload = await res.json();
    return Ok(payload as object);
  } catch (err) {
    console.error(err.message);
    return ServerError();
  }
}

export const AuthServices = {
  SignIn,
  SignUp,
  VerifyCredentials,
}