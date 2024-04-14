import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { ThemeToggle } from '@/app/components/themeToggle/ThemeToggle';
import { type FC } from 'react';

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="text-lg font-bold">Home</div>
        <ThemeToggle />
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              aut.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              aut.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
