"use client";
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Define the type for the Timesheet Table
type TimesheetTable = {
  No: string;
  Project: JSX.Element;
  Module: JSX.Element;
  Task: JSX.Element;
  Status: JSX.Element;
  Hours: JSX.Element;
};

// Default Data
const defaultData: TimesheetTable[] = [
  {
    No: "1",
    Project: (
      // <select className="w-full p-2 border rounded">
      //   <option>Spectra IQ</option>
      //   <option>BNS</option>
      // </select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
    Module: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="moduel a">Module A</SelectItem>
            <SelectItem value="moduel b">Module B</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
    Task: (
      <Input
        type="text"
        placeholder="Enter task"
        className="w-full p-2 border rounded"
      />
    ),
    Status: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="inprogress">In progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="Yst">Yet to start</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
    Hours: (
      <Input
        type="text"
        placeholder="Enter hours"
        className="w-full p-2 border rounded"
      />
    ),
  },
];

// Helper for creating columns
const columnHelper = createColumnHelper<TimesheetTable>();

// Component
const TimeSheetTable = () => {
  const [data, setData] = React.useState<TimesheetTable[]>(() => [
    ...defaultData,
  ]);
  // Define Columns
  const columns = [
    columnHelper.accessor((row) => row.No, {
      id: "No",
      header: () => <span>No</span>,
      cell: (info) => <i>{info.getValue()}</i>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Project", {
      header: () => "Project",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Module", {
      header: () => <span>Module</span>,
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Task", {
      header: () => <span>Task</span>,
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Status", {
      header: () => <span>Status</span>,
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Hours", {
      header: () => <span>Hours</span>,
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      id: "actions",
      header: () => <span>Actions</span>,
      cell: ({ row }) => (
        <Button
          variant="ghost"
          className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => handleDeleteRow(row.index)}
        >
          <Image
            src={"/timesheetTable/delete_icon.svg"}
            alt="delete icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </Button>
      ),
    }),
  ];
  // Delete Row Functionality
  const handleDeleteRow = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  // Add Row Functionality
  const handleAddRow = () => {
    const newRow: TimesheetTable = {
      No: (data.length + 1).toString(),
      Project: (
        <select className="w-full p-2 border rounded">
          <option>Spectra IQ</option>
          <option>BNS</option>
        </select>
      ),
      Module: (
        <select className="w-full p-2 border rounded">
          <option>Module A</option>
          <option>Module B</option>
        </select>
      ),
      Task: (
        <input
          type="text"
          placeholder="Enter task"
          className="w-full p-2 border rounded"
        />
      ),
      Status: (
        <select className="w-full p-2 border rounded">
          <option>In Progress</option>
          <option>Completed</option>
          <option>Not Started</option>
        </select>
      ),
      Hours: (
        <input
          type="number"
          placeholder="Enter hours"
          className="w-full p-2 border rounded"
        />
      ),
    };
    setData((prev) => [...prev, newRow]);
  };

  // Save Functionality (Placeholder)
  const handleSave = () => {
    console.log("Saving data:", data);
    alert("Data saved successfully!");
  };

  // Initialize Table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-7xl mx-auto p-6 mt-5 bg-white shadow-lg rounded-lg">
      {/* Controls */}
      <div className="flex justify-end gap-5 mb-4">
        <Button
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={handleSave}
        >
          <Image
            src={"/timesheetTable/save_icon.svg"}
            alt="save icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </Button>
        <Button
          className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-600 transition-colors"
          onClick={handleAddRow}
        >
          <Image
            src={"/timesheetTable/add.svg"}
            alt="delete icon"
            width={20}
            height={20}
            className="object-cover"
          />
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[400px]">
        <table className="w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100 sticky top-0">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-3 text-left font-semibold text-gray-700 border-b"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="overflow-y-auto">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id} className="bg-gray-100">
                {footerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-3 text-left font-semibold text-gray-700 border-t"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default TimeSheetTable;
