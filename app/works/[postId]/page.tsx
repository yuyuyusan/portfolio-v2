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
      <div className="text-lg font-bold">
        <h1>{detailData.title}</h1>
        <p>{detailData.content}</p>
        <p>{detailData.id}</p>
        <p>{detailData.username}</p>
      </div>
    </>
  );
}
