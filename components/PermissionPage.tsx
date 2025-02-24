import React from "react";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
const PermissionPage = () => {
  return (
    <Card>
      <CardContent className="space-y-2">
        <Tabs defaultValue="history" className="w-full">
          <TabsList>
            <TabsTrigger value="history">Permission History</TabsTrigger>
            <TabsTrigger value="balance">Permission Balance</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="balance">Change your password here.</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PermissionPage;
