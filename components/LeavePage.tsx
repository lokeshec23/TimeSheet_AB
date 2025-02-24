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
const LeavePage = () => {
  return (
    <Card>
      <CardContent className="space-y-2">
        <Tabs defaultValue="history" className="w-full">
          <TabsList>
            <TabsTrigger value="history">Leave History</TabsTrigger>
            <TabsTrigger value="balance">Leave Balance</TabsTrigger>
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

export default LeavePage;
