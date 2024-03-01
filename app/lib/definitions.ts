export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type WishListItem = {
  id: string;
  userId: string;
  url: string;
  imgURL?: string;
  name: string;
  price: number;
};

export type ListRequest = {
  id: string;
  userId: string;
  requestingUserId: string;
  status: 'request' | 'approved' | 'denied';
}
