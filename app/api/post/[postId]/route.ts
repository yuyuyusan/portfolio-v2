import prisma from '@/lib/prismaClient';
import { NextResponse } from 'next/server';
import { parse } from 'path';

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId;
  const allPosts = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });
  return NextResponse.json(allPosts);
}
