export enum Status {
  active = 'Active',
  signaturePending= 'Signature pending'
}
export interface StatusInterface {
  id: string;
  label: string;
}
