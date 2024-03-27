import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuctionCard from '@/components/common/AuctionCard';
import testArts from '@/mocks/testArts.json';
import { QueryClient, useQuery, keepPreviousData } from '@tanstack/react-query';
import Pagination from '@/components/common/Pagination';
import AuctionList from '@/components/domain/search/AuctionList';
import EmptyView from '@/components/common/EmptyView';
import SelectBox from '@/components/common/SortSelect';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Art = {
  id: number;
  artName: string;
  artImage: string;
  artist: string;
  status: string;
  createdAt: number;
  wishCnt: number;
};

const getTodos = async (page: number, limit: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`);
  const data = await res.json();
  return data;
};

function SearchPage() {
  const router = useRouter();
  const { keyword } = router.query;

  const artData = testArts.results;
  const [arts, setArts] = useState(artData);

  const [order, setOrder] = useState('createdAt');

  const sortedItems = arts.sort((a, b) => Number(b[order as keyof Art]) - Number(a[order as keyof Art]));

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const totalCount = 200;
  const indexSize = 10;

  const totalPage = Math.ceil(totalCount / pageSize);
  const currentPageGroup = Math.ceil(currentPage / indexSize);

  const startPage = (currentPageGroup - 1) * indexSize + 1;
  const endPage = Math.min(startPage + indexSize - 1, totalPage);

  const {
    data: todos,
    isPending,
    isError,
  } = useQuery<Todo[]>({
    queryKey: ['todos', currentPage],
    queryFn: () => getTodos(currentPage, pageSize),
    placeholderData: keepPreviousData,
  });

  const queryClient = new QueryClient();

  useEffect(() => {
    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery({
        queryKey: ['todos', currentPage],
        queryFn: () => getTodos(nextPage, pageSize),
      });
    }
  }, [currentPage, queryClient]);

  if (isPending) return '로딩 중입니다...';

  if (isError) return '에러가 발생했습니다.';

  return (
    <div className='mx-auto my-0 w-[136.8rem]'>
      <Head>
        <title>{keyword} 검색 결과 - YUMU</title>
      </Head>

      <div className='mb-[6rem] flex items-center'>
        <h2 className='flex-1 text-18-500 text-gray-9'>
          &apos;<strong>{keyword}</strong>&apos;에 대한 검색 결과
        </h2>

        <SelectBox setOrder={setOrder} />
      </div>

      {/* UI 테스트용 */}
      <div className='flex flex-col items-center'>
        <ul className='grid w-full grid-cols-4 gap-x-[3rem] gap-y-[6rem]'>
          {sortedItems?.map((item) => (
            <li key={item.id}>
              <Link href={`/auction/${item.id}/detail`}>
                <AuctionCard {...item} />
              </Link>
            </li>
          ))}
        </ul>

        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          startPage={startPage}
          endPage={endPage}
        />

        {/* API 테스트용 */}
        {todos && todos.length !== 0 ? (
          <AuctionList todos={todos} />
        ) : (
          <EmptyView text={'검색어를 찾을 수 없습니다.'} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;
