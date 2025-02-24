"use client";
import React, { useState } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CompanyDetail from "@/components/CompanyDetail";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon, UsersIcon, CodeIcon, CheckCircleIcon } from "lucide-react";
const AdminPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "SpectraIQ",
      description: "Data Visulation Project",
      startDate: "2024-01-01",
      endDate: "2024-06-01",
      developerTeam: [
        { name: "Lokesh", emailId: "lokesh@example.com" },
        { name: "Franklin", emailId: "" },
      ],
      testingTeam: [{ name: "Amit", emailId: "amit@example.com" }],
      productManagement: [{ name: "Neha", emailId: "neha@example.com" }],
    },
    {
      id: 2,
      name: "Project Beta",
      description: "This is project Beta",
      startDate: "2024-02-01",
      endDate: "2024-07-01",
      developerTeam: [{ name: "Rahul", emailId: "rahul@example.com" }],
      testingTeam: [{ name: "Sara", emailId: "sara@example.com" }],
      productManagement: [{ name: "Kiran", emailId: "kiran@example.com" }],
    },
    {
      id: 3,
      name: "Project Beta",
      description: "This is project Beta",
      startDate: "2024-02-01",
      endDate: "2024-07-01",
      developerTeam: [{ name: "Rahul", emailId: "rahul@example.com" }],
      testingTeam: [{ name: "Sara", emailId: "sara@example.com" }],
      productManagement: [{ name: "Kiran", emailId: "kiran@example.com" }],
    },
    {
      id: 4,
      name: "Project Beta",
      description: "This is project Beta",
      startDate: "2024-02-01",
      endDate: "2024-07-01",
      developerTeam: [{ name: "Rahul", emailId: "rahul@example.com" }],
      testingTeam: [{ name: "Sara", emailId: "sara@example.com" }],
      productManagement: [{ name: "Kiran", emailId: "kiran@example.com" }],
    },
  ]);

  const [company, setCompany] = useState({
    name: "My Company",
    address: "123 Main Street, City",
    developerTeam: [{ name: "John", emailId: "john@example.com" }],
    testingTeam: [{ name: "Emma", emailId: "emma@example.com" }],
    productManagement: [{ name: "Mike", emailId: "mike@example.com" }],
  });

  const handleCompanyChange = (field: any, value: any) => {
    setCompany((prev) => ({ ...prev, [field]: value }));
  };
  const handleEdit = (projectId: number) => {
    console.log(`Edit project with ID: ${projectId}`);
    // Implement edit functionality here
    
  };
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Project Details</TabsTrigger>
          <TabsTrigger value="company">Company Details</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <h1 className="text-2xl font-bold mb-4 ">Admin Panel - Projects</h1>
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 p-3"
            style={{ height: "70dvh", overflowY: "auto" }}
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                className="relative bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Edit Button */}
                <Button
                  onClick={() => handleEdit(project.id)}
                  className="absolute rounded top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-700"
                  size="sm"
                  variant="default"
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit
                </Button>

                {/* Card Content */}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Dates */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">
                        Start: {project.startDate}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-sm text-gray-700">
                        End: {project.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Developer Team */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <CodeIcon className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="font-medium text-gray-800">
                        Developer Team
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700">
                      {project.developerTeam.map((dev, index) => (
                        <li key={index}>
                          {dev.name} ({dev.emailId})
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testing Team */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <UsersIcon className="h-5 w-5 text-teal-600 mr-2" />
                      <span className="font-medium text-gray-800">
                        Testing Team
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700">
                      {project.testingTeam.map((test, index) => (
                        <li key={index}>
                          {test.name} ({test.emailId})
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Product Management Team */}
                  <div>
                    <div className="flex items-center mb-2">
                      <UsersIcon className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-medium text-gray-800">
                        Product Management Team
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700">
                      {project.productManagement.map((pm, index) => (
                        <li key={index}>
                          {pm.name} ({pm.emailId})
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="company">
          <CompanyDetail />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;
