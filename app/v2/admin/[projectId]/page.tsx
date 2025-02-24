"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, UsersIcon, CodeIcon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";

const EditProjectPage = () => {
  // Sample project data (replace this with API data or state management)
  const [project, setProject] = useState({
    id: 1,
    name: "Project Alpha",
    description: "A cutting-edge AI-based analytics platform.",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    developerTeam: [
      { name: "John Doe", emailId: "john.doe@example.com" },
      { name: "Jane Smith", emailId: "jane.smith@example.com" },
    ],
    testingTeam: [
      { name: "Alice Johnson", emailId: "alice.johnson@example.com" },
    ],
    productManagement: [
      { name: "Bob Brown", emailId: "bob.brown@example.com" },
    ],
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  // Handle team member updates
  const updateTeamMember = (
    teamType: "developerTeam" | "testingTeam" | "productManagement",
    index: number,
    field: "name" | "emailId",
    value: string
  ) => {
    const updatedTeam = [...project[teamType]];
    updatedTeam[index][field] = value;
    setProject((prev) => ({ ...prev, [teamType]: updatedTeam }));
  };

  // Save changes (replace with API call)
  const handleSave = () => {
    console.log("Updated Project Data:", project);
    alert("Project details saved successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Save Button */}
      <div className="flex justify-between mb-3">
        <Link href={"/v2/admin"}>Back</Link>
        <Button
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-700"
        >
          Save Changes
        </Button>
      </div>
      <div style={{ height: "80dvh", overflowY: "scroll" }}>
        {/* Project Header */}
        <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Edit Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Project Name */}
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Project Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={project.name}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                  className="mt-1"
                />
              </div>

              {/* Project Description */}
              <div>
                <Label htmlFor="description" className="text-gray-700">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={project.description}
                  onChange={handleInputChange}
                  placeholder="Enter project description"
                  className="mt-1"
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-gray-700">
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={project.startDate}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-gray-700">
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={project.endDate}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.developerTeam.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={member.name}
                        onChange={(e) =>
                          updateTeamMember(
                            "developerTeam",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Name"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={member.emailId}
                        onChange={(e) =>
                          updateTeamMember(
                            "developerTeam",
                            index,
                            "emailId",
                            e.target.value
                          )
                        }
                        placeholder="Email"
                      />
                    </TableCell>
                  </TableRow>
                ))}
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.testingTeam.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={member.name}
                        onChange={(e) =>
                          updateTeamMember(
                            "testingTeam",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Name"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={member.emailId}
                        onChange={(e) =>
                          updateTeamMember(
                            "testingTeam",
                            index,
                            "emailId",
                            e.target.value
                          )
                        }
                        placeholder="Email"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Product Management Team */}
        <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <UsersIcon className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-xl font-semibold text-gray-800">
                Product Management Team
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.productManagement.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={member.name}
                        onChange={(e) =>
                          updateTeamMember(
                            "productManagement",
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Name"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={member.emailId}
                        onChange={(e) =>
                          updateTeamMember(
                            "productManagement",
                            index,
                            "emailId",
                            e.target.value
                          )
                        }
                        placeholder="Email"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditProjectPage;
