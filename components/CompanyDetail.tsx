"use client";
import LoadingPage from "@/app/v2/loading";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UsersIcon, CodeIcon, CheckCircleIcon } from "lucide-react";
interface TeamStrucure {
  name: string;
  emailId: string;
  role: string;
}
const CompanyDetail = () => {
  // Define state to store the fetched companyData
  const [companyData, setcompanyData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch companyData when the component mounts
  useEffect(() => {
    const fetchcompanyData = async () => {
      try {
        // Fetch companyData from the API
        const response = await fetch("/v2/admin/services/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setcompanyData(result[0]); // Update state with the fetched companyData
      } catch (err: any) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    fetchcompanyData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render loading state
  if (loading) {
    return (
      <h1 className="text-2xl font-bold mb-4">
        <LoadingPage />
      </h1>
    );
  }

  // Render error state
  if (error) {
    return (
      <h1 className="text-2xl font-bold mb-4 text-red-500">Error: {error}</h1>
    );
  }

  // Render the fetched companyData
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ height: "72dvh", overflowY: "scroll" }}
    >
      {/* Company Header */}
      <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            {companyData.companyName}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {companyData.moto}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{companyData.address}</p>
        </CardContent>
      </Card>

      {/* Management Team */}
      <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <UsersIcon className="h-6 w-6 text-purple-600" />
            <CardTitle className="text-xl font-semibold text-gray-800">
              Management Team
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companyData.managementTeam.map(
                (member: TeamStrucure, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.emailId}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Developer Team */}
      <Card className="mb-8 bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6 text-green-600" />
            <CardTitle className="text-xl font-semibold text-gray-800">
              Developer Team
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companyData.developerTeam.map(
                (member: TeamStrucure, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.emailId}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Testing Team */}
      <Card className="mb-8 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="h-6 w-6 text-yellow-600" />
            <CardTitle className="text-xl font-semibold text-gray-800">
              Testing Team
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companyData.testingTeam.map(
                (member: TeamStrucure, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.emailId}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDetail;
