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
import CardDataList from '@/app/components/CardDataList';
import { CardData } from '@/app/types/types';

async function getCardAllData() {
  const response = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
  });
  const cardAllData: CardData[] = await response.json();
  return cardAllData;
}

export default async function Home() {
  const cardAllData = await getCardAllData();
  return (
    <main>
      <div className="">
        <div className="text-lg font-bold">Home</div>
        <ThemeToggle />
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <CardDataList cardAllData={cardAllData} />
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
