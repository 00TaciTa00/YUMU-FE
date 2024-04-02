import { AuctionProps } from '@/types/types';

const Auctions: AuctionProps[] = [
  {
    id: 1,
    artId: 1,
    artDetail: '레오나르도 다 빈치의 모나리자를 모작한 것',
    artSize: '320 480',
    artDate: new Date('2023-01-19'),
    startDate: new Date('2024-02-15T10:00:00'),
    endDate: new Date('2024-02-15T11:00:00'),
    startPrice: 100000,
    endPrice: 1000000000,
    bidder: 'user1',
    notice: '',
    receiveType: '택배 배송',
  },
  {
    id: 2,
    artId: 2,
    artDetail: '아름다운 것',
    artSize: '480 480',
    artDate: new Date('2023-01-20'),
    startDate: new Date('2024-02-16T11:00:00'),
    endDate: new Date('2024-02-16T11:00:00'),
    startPrice: 200000,
    endPrice: 1011000000,
    bidder: 'user1',
    notice: '',
    receiveType: '직접 수령',
  },
  {
    id: 3,
    artId: 3,
    artDetail: '단정하고 화려한 것',
    artSize: '640 480',
    artDate: new Date('2023-01-19'),
    startDate: new Date('2024-02-13T10:00:00'),
    endDate: new Date('2024-02-13T11:00:00'),
    startPrice: 2000000,
    endPrice: 2000000000,
    bidder: 'user1',
    notice: '유의 사항',
    receiveType: '이메일 송신',
  },
  {
    id: 4,
    artId: 4,
    artDetail: '내려 앉는 것',
    artSize: '1080 480',
    artDate: new Date('2023-01-19'),
    startDate: new Date('2024-02-19T17:00:00'),
    endDate: new Date('2024-02-19T11:00:00'),
    startPrice: 100000,
    endPrice: null,
    bidder: null,
    notice: '아직 경매가 시작되지 않은 데이터',
    receiveType: '직접 수령',
  },
  {
    id: 5,
    artId: 5,
    artDetail: '반지들',
    artSize: '480 640',
    artDate: new Date('2021-08-19'),
    startDate: new Date('2024-02-19T19:00:00'),
    endDate: new Date('2024-02-19T20:00:00'),
    startPrice: 100000,
    endPrice: null,
    bidder: null,
    notice: '',
    receiveType: '직접 수령',
  },
];

export default Auctions;
