export interface ConnexionRequest {
  email: string;
  password: string;
}

export interface ConnexionResponse {
  token: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    matricule: string;
  };
}
