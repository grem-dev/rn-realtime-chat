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


export const AuthServices = {
  SignIn,
  SignUp
}