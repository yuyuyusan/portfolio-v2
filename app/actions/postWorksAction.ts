'use server';

import prisma from '@/lib/prismaClient';
import { formSchema } from '../works/create/page';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const postWorksAction = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  revalidatePath('/');
  redirect('/');
};
