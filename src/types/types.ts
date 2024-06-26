export interface MemberProps {
  id: number;
  email: string;
  nickname: string;
  password: string;
  profileImage: null | string;
  introduce: null | string;
  snsLink: null | string;
  address: null | string;
}

export interface PurchaseHistoryProps {
  id: number;
  memberId: number;
  auctionId: number;
  artName: string;
  artist: string;
  price: number;
  artImage: string;
  purchaseDate: string;
}

export interface SalesHistoryProps {
  id: number;
  memberId: number;
  auctionId: number;
  artName: string;
  artist: string;
  price: string;
  artImage: string;
  status: string;
  saleDate: string;
}

export interface WishListProps {
  id: number;
  memberId: number;
  auctionId: number;
}

export interface ArtPropsData {
  page: number;
  totalElements: number;
  totalPages: number;
  auctions: ArtProps[];
}

export interface ArtProps {
  id: number;
  artName: string;
  artImage: string;
  artist: string;
  status: string;
  createdAt: Date;
  wishCnt: number;
}

export interface AuctionProps {
  id: number;
  artImage: string;
  artName: string;
  artSubTitle: string;
  createdAt: string;
  artist: string;
  status: string;
  wishCnt: number;
}

export interface AuctionDetailProps {
  artInfo: GetAuctionDetailsArtInfoProps;
  artistInfo: GetAuctionDetailsArtistInfoProps;
  id: number;
  artDescription: string;
  artSummary: null;
  artSize: string;
  artCreatedDate: string;
  auctionStartDate: string;
  auctionEndDate: string;
  defaultBid: number;
  winningBid: string | number;
  winningBidder: string | null;
  notice: string | null;
  receiveType: string;
}

export interface RegistrationProps {
  artName: string;
  artSubTitle: string;
  artDescription: string;
  artSummary: string;
  artSize: string;
  artCreatedDate?: string;
  auctionStartDate?: string;
  auctionEndDate?: string;
  defaultBid?: string;
  notice: string;
  receiveType: string;
}

export interface AuctionProps {
  page: number;
  size: number;
  sort?: string;
  keyword?: string;
}
export interface MemberInfoProps {
  id: number;
  email: string;
  nickname: string;
  password: string;
  introduce: null | string;
  snsLink: null | string;
  profileImage: null | string;
}

export interface PutMemberPwdProps {
  password: string;
  newPassword: string;
  newCheckPassword: string;
}

export interface PostAuthLoginProps {
  email: string;
  password: string;
}

export interface PostAuthSignUpProps {
  nickname: string;
  email: string;
  password: string;
  checkPassword: string;
}

export interface GetAuctionDetailsArtInfoProps {
  id: number;
  artName: string;
  artSubTitle: string;
  artImage: string;
  artist: string;
  status: string;
  createAt: string;
  wishCnt: number;
}

export interface GetAuctionDetailsArtistInfoProps {
  email: string;
  nickname: string;
  introduce: null | string;
  profileImage: null | string;
  loginStatus: string;
}

export interface GetAuctionDetailsProps {
  artInfo: GetAuctionDetailsArtInfoProps;
  artistInfo: GetAuctionDetailsArtistInfoProps;
  id: number;
  artDescription: string;
  artSummary: null;
  artSize: string;
  artCreatedDate: string;
  auctionStartDate: string;
  auctionEndDate: string;
  defaultBid: number;
  winningBid: string | number;
  winningBidder: string | null;
  notice: string | null;
  receiveType: string;
}
