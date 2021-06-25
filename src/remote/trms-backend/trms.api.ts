import User from "../../models/user";
import trmsClient from "./trms.client";
import Reimbursement from "../../models/reimbursement";

export const sendLogin = async (username: string, password: string): Promise<User> => {
  const {data: user} = await trmsClient.post<User>('/login', {
    username,
    password,
  });

  return user;
}
export const getReimbursements = async(): Promise<Reimbursement[]> => {
  const result = await trmsClient.get<Reimbursement[]>('/api/v1/reimbursements');
  return result.data;
}
export const getEmployeeReimbursements = async(): Promise<Reimbursement[]> => {
  const result = await trmsClient.get<Reimbursement[]>('/api/v1/reimbursements/:username');
  return result.data;
}
export const deleteReimbursement = async(id: string): Promise<void> => {
  console.log('API id: ', id);
  await trmsClient.delete<boolean>(`/api/v1/reimbursements/:${id}`);
}