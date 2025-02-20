import LeavePage from "@/components/LeavePage";
import PermissionPage from "@/components/PermissionPage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <Tabs defaultValue="leave" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="leave">Leaves</TabsTrigger>
        <TabsTrigger value="permission">Permissions</TabsTrigger>
      </TabsList>
      <TabsContent value="leave">
        <LeavePage />
      </TabsContent>
      <TabsContent value="permission">
        <PermissionPage />
      </TabsContent>
    </Tabs>
  );
}
