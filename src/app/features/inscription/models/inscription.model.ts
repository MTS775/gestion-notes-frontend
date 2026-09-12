export interface InscriptionRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface InscriptionResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  matricule: string;
  createdAt: string;
}
