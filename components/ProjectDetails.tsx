import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectStructure = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  developerTeam: {
    name: string;
    emailId: string;
  }[];
  testingTeam: {
    name: string;
    emailId: string;
  }[];
  productManagement: {
    name: string;
    emailId: string;
  }[];
};
[];

// interface PeopleStructure {
//   name: string;
//   emailID: string;
// }
// interface ProjectStructure {
//   id: number;
//   name: string;
//   description: string;
//   startDate: string;
//   endDate: string;
//   developerTeam: PeopleStructure[];
//   testingTeam: PeopleStructure[];
//   productManagement: PeopleStructure[];
// }

const ProjectDetails = (projects: ProjectStructure) => {
  return (
    <div className="grid gap-4">
      {projects.map((project: ProjectStructure) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
            <p>Start Date: {project.startDate}</p>
            <p>End Date: {project.endDate}</p>
            <p>Developer Team:</p>
            <ul>
              {project.developerTeam.map(
                (dev: { name: string; emailId: string }, index) => (
                  <li key={index}>
                    {dev.name} ({dev.emailId})
                  </li>
                )
              )}
            </ul>
            <p>Testing Team:</p>
            <ul>
              {project.testingTeam.map(
                (test: { name: string; emailId: string }, index) => (
                  <li key={index}>
                    {test.name} ({test.emailId})
                  </li>
                )
              )}
            </ul>
            <p>Product Management Team:</p>
            <ul>
              {project.productManagement.map(
                (pm: { name: string; emailId: string }, index) => (
                  <li key={index}>
                    {pm.name} ({pm.emailId})
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectDetails;
