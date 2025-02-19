import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo({ username }: { username: string }) {
  const shortName = username.split(" ")[0].slice(0, 2);
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>{shortName}</AvatarFallback>
    </Avatar>
  );
}
