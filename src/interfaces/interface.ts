import { FormEvent } from "react";

export enum IField {
  fullName = "fullName",
  email = "email",
  password = "password",
}

export interface RegData {
  fullName?: string;
  email: string;
  password: string;
}

export type PropsAuthField = {
  onChangeHandler: (e: FormEvent<HTMLInputElement>, field: IField) => void;
};

export type PropsModal = {
  setOpenModal: (openModal: boolean) => void;
  onSubmitModal: (e: React.FormEvent<HTMLFormElement>) => void;
  item: {
    title: string;
    duration: number;
    level: string;
    price: number;
  };
  guests: string;
  setGuests: (guests: string) => void;
};

export interface State {
  auth: any;
  user: {
    id: string | null;
    fullName: string | null;
    email: string | null;
    createdAt: string | null;
  };
  token: string | null;
  isLoggedIn?: boolean;
  isLoading?: boolean;
}

export enum ILevel {
  easy = "easy",
  moderate = "moderate",
  difficalt = "difficalt",
}
export interface Trip {
  id: string;
  title: string;
  description: string;
  level: string;
  Enum: ILevel;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}
