import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
const teamsInfo = [
  {
    id: 1,
    employeeID: "EMP001",
    name: "Lokesh",
    designation: "Software Developer",
    dob: "28-11-2001",
    phone: 9361062252,
    address: "Chennai",
    email: "lokesh.ec23@gmail.com",
    profileImage: "https://picsum.photos/seed/lokesh/200", // Random image for Lokesh
    joiningDate: "02/08/2023",
    degrees: "Engineering",
    projectsWorkingOn: ["SpectraIQ", "BNS"],
    linkedinLink: "https://www.linkedin.com/in/lokesh-profile",
  },
  {
    id: 2,
    employeeID: "EMP002",
    name: "Alice",
    designation: "Frontend Developer",
    dob: "15-05-1998",
    phone: 9876543210,
    address: "Bangalore",
    email: "alice.dev@gmail.com",
    profileImage: "https://picsum.photos/seed/alice/200", // Random image for Alice
    joiningDate: "10/01/2022",
    degrees: "Computer Science",
    projectsWorkingOn: ["Next.js App", "React Dashboard"],
    linkedinLink: "https://www.linkedin.com/in/alice-profile",
  },
  {
    id: 3,
    employeeID: "EMP003",
    name: "Bob",
    designation: "Backend Developer",
    dob: "03-09-1995",
    phone: 8765432109,
    address: "Hyderabad",
    email: "bob.backend@gmail.com",
    profileImage: "https://picsum.photos/seed/bob/200", // Random image for Bob
    joiningDate: "15/06/2021",
    degrees: "Information Technology",
    projectsWorkingOn: ["API Gateway", "Microservices"],
    linkedinLink: "https://www.linkedin.com/in/bob-profile",
  },
  {
    id: 4,
    employeeID: "EMP004",
    name: "Charlie",
    designation: "Full Stack Developer",
    dob: "22-03-1997",
    phone: 7654321098,
    address: "Pune",
    email: "charlie.fullstack@gmail.com",
    profileImage: "https://picsum.photos/seed/charlie/200", // Random image for Charlie
    joiningDate: "05/03/2023",
    degrees: "Engineering",
    projectsWorkingOn: ["E-commerce Platform", "CMS"],
    linkedinLink: "https://www.linkedin.com/in/charlie-profile",
  },
  {
    id: 5,
    employeeID: "EMP005",
    name: "Diana",
    designation: "DevOps Engineer",
    dob: "12-07-1996",
    phone: 6543210987,
    address: "Mumbai",
    email: "diana.devops@gmail.com",
    profileImage: "https://picsum.photos/seed/diana/200", // Random image for Diana
    joiningDate: "20/09/2022",
    degrees: "Electronics and Communication",
    projectsWorkingOn: ["CI/CD Pipeline", "Kubernetes Cluster"],
    linkedinLink: "https://www.linkedin.com/in/diana-profile",
  },
  {
    id: 6,
    employeeID: "EMP006",
    name: "Eve",
    designation: "UI/UX Designer",
    dob: "05-12-1994",
    phone: 5432109876,
    address: "Delhi",
    email: "eve.designer@gmail.com",
    profileImage: "https://picsum.photos/seed/eve/200", // Random image for Eve
    joiningDate: "12/04/2021",
    degrees: "Design",
    projectsWorkingOn: ["Mobile App Design", "Website Redesign"],
    linkedinLink: "https://www.linkedin.com/in/eve-profile",
  },
  {
    id: 7,
    employeeID: "EMP007",
    name: "Frank",
    designation: "Data Scientist",
    dob: "18-02-1993",
    phone: 4321098765,
    address: "Kolkata",
    email: "frank.data@gmail.com",
    profileImage: "https://picsum.photos/seed/frank/200", // Random image for Frank
    joiningDate: "01/07/2020",
    degrees: "Statistics",
    projectsWorkingOn: ["Predictive Analytics", "Machine Learning Models"],
    linkedinLink: "https://www.linkedin.com/in/frank-profile",
  },
  {
    id: 8,
    employeeID: "EMP008",
    name: "Grace",
    designation: "Product Manager",
    dob: "25-08-1990",
    phone: 3210987654,
    address: "Chandigarh",
    email: "grace.product@gmail.com",
    profileImage: "https://picsum.photos/seed/grace/200", // Random image for Grace
    joiningDate: "14/11/2019",
    degrees: "Business Administration",
    projectsWorkingOn: ["Product Roadmap", "Feature Prioritization"],
    linkedinLink: "https://www.linkedin.com/in/grace-profile",
  },
  {
    id: 9,
    employeeID: "EMP009",
    name: "Hannah",
    designation: "QA Engineer",
    dob: "07-04-1999",
    phone: 2109876543,
    address: "Jaipur",
    email: "hannah.qa@gmail.com",
    profileImage: "https://picsum.photos/seed/hannah/200", // Random image for Hannah
    joiningDate: "22/02/2023",
    degrees: "Computer Applications",
    projectsWorkingOn: ["Automated Testing", "Bug Tracking"],
    linkedinLink: "https://www.linkedin.com/in/hannah-profile",
  },
  {
    id: 10,
    employeeID: "EMP010",
    name: "Ian",
    designation: "Cloud Architect",
    dob: "14-10-1988",
    phone: 1098765432,
    address: "Ahmedabad",
    email: "ian.cloud@gmail.com",
    profileImage: "https://picsum.photos/seed/ian/200", // Random image for Ian
    joiningDate: "05/05/2018",
    degrees: "Cloud Computing",
    projectsWorkingOn: ["AWS Migration", "Serverless Architecture"],
    linkedinLink: "https://www.linkedin.com/in/ian-profile",
  },
  {
    id: 11,
    employeeID: "EMP011",
    name: "Julia",
    designation: "Cybersecurity Specialist",
    dob: "30-06-1992",
    phone: 9876543210,
    address: "Lucknow",
    email: "julia.security@gmail.com",
    profileImage: "https://picsum.photos/seed/julia/200", // Random image for Julia
    joiningDate: "18/08/2021",
    degrees: "Cybersecurity",
    projectsWorkingOn: ["Penetration Testing", "Threat Analysis"],
    linkedinLink: "https://www.linkedin.com/in/julia-profile",
  },
];

const TeamInfo = () => {
  return (
    <div className="px-4">
      {/* Grid Layout */}
      <p className="text-2xl">Teams</p>
      <div className="grid grid-cols-1 gap-6">
        {teamsInfo.map((emp) => (
          <Card
            key={emp.employeeID}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Card Header */}
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              {/* Avatar */}
              <Avatar className="w-12 h-12 border-2 border-gray-200 shadow-sm">
                <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
                  {emp.name.split("").splice(0, 2).join("").toLocaleUpperCase()}
                </AvatarFallback>
              </Avatar>
              {/* Name and Designation */}
              <div>
                <CardTitle className="text-lg font-semibold">
                  {emp.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {emp.designation}
                </CardDescription>
              </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="space-y-2">
              {/* Projects */}
              <div>
                <p className="text-sm font-medium">Projects:</p>
                <div className="flex flex-wrap gap-2">
                  {emp.projectsWorkingOn.map((project, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm truncate"
                    >
                      {project}
                    </Badge>
                  ))}
                </div>
              </div>
              {/* Contact Info */}
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Email:</span> {emp.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Phone:</span> {emp.phone}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Location:</span> {emp.address}
                </p>
              </div>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="flex justify-between items-center pt-4 border-t">
              <Badge variant="secondary" className="text-xs">
                Joined: {emp.joiningDate}
              </Badge>
              <a
                href={emp.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                LinkedIn Profile
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
