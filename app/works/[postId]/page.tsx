import React from 'react';
import { CardData } from '@/app/types/types';

async function getDetailData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: 'no-store',
  });
  const detailData: CardData = await response.json();
  return detailData;
}

export default async function DetailData({
  params,
}: {
  params: { postId: number };
}) {
  const detailData = await getDetailData(params.postId);
  console.log(detailData);
  return (
    <>
      <div className="mx-auto max-w-4xl p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{detailData.title}</h1>
          <p className="text-gray-400">{detailData.username}</p>
          <p>{detailData.content}</p>
          <p>{detailData.id}</p>
        </div>
        <a
          href={'/'}
          className="bg-blue-400 text-white font-bold py-2 px-4 rounded-sm"
        >
          戻る
        </a>
      </div>
    </>
  );
}
