import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const DeveloperFeeds = () => {
  const data = [
    {
      id: 1,
      title: "Node.js Info",
      description: "anananana",
      author: "Lokesh",
      date: "2023-01-01",
    },
    {
      id: 2,
      title: "React Basics",
      description: "Learn the basics of React and build your first app.",
      author: "Alice",
      date: "2023-02-15",
    },
    {
      id: 3,
      title: "JavaScript Tips",
      description: "Master JavaScript with these tips and tricks.",
      author: "Bob",
      date: "2023-03-20",
    },
    {
      id: 4,
      title: "CSS Tricks",
      description: "Discover advanced CSS techniques for modern web design.",
      author: "Charlie",
      date: "2023-04-10",
    },
    {
      id: 5,
      title: "Python Programming",
      description: "Get started with Python programming for beginners.",
      author: "Diana",
      date: "2023-05-05",
    },
    {
      id: 6,
      title: "Docker Guide",
      description: "A comprehensive guide to Docker containers.",
      author: "Eve",
      date: "2023-06-25",
    },
    {
      id: 7,
      title: "Kubernetes Essentials",
      description: "Understand Kubernetes and its core concepts.",
      author: "Lokesh",
      date: "2023-07-12",
    },
    {
      id: 8,
      title: "GraphQL Fundamentals",
      description: "Explore GraphQL and its advantages over REST APIs.",
      author: "Alice",
      date: "2023-08-18",
    },
    {
      id: 9,
      title: "Next.js Features",
      description: "Build server-side rendered apps with Next.js.",
      author: "Bob",
      date: "2023-09-03",
    },
    {
      id: 10,
      title: "Tailwind CSS",
      description: "Style your apps quickly with Tailwind CSS.",
      author: "Charlie",
      date: "2023-10-22",
    },
    {
      id: 11,
      title: "MongoDB Basics",
      description: "Introduction to MongoDB and NoSQL databases.",
      author: "Diana",
      date: "2023-11-11",
    },
    {
      id: 12,
      title: "Express.js Routing",
      description: "Routing in Express.js made easy.",
      author: "Eve",
      date: "2023-12-30",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-2xl">Feeds</p>
        <Button className="bg-green-800 text-black px-4 py-2 rounded hover:bg-green-900 transition-colors">
          <Image
            src={"/timesheetTable/add.svg"}
            alt="delete icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </Button>
      </div>
      {data.map((feed, index) => {
        return (
          <Link href={`/feeds/${feed.id}`} key={index}>
            <Card className="my-2">
              <CardHeader>
                <CardTitle>{feed.title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent>
                <p>{feed.description}</p>
              </CardContent>
              <CardFooter>
                <p>Posted By - {feed.author}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default DeveloperFeeds;
