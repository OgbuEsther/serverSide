export interface adminSignUp {
  companyName: string;
  companyEmail: string;
  yourName: string;
  password: string;
}

export interface adminSignIn {
  email: string;
  password: string;
}

export interface staffSignUp {
  yourName: string;
  email: string;
  password: string;
  companyName: string;
  position: string;
}

export interface staffSignIn {
  email: string;
  password: string;
}
