
export interface ILastMessage {
  content: string;
  date: string;
}

export interface IChat {
  email: string;
  id: string;
  name: string;
  lastMessage: ILastMessage | undefined;
}