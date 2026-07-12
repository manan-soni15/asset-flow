"use client";

import { useState } from "react";

import Tabs from "@/components/dashboard/organization/Tabs";
import DepartmentsTable from "@/components/dashboard/organization/DepartmentsTable";
import CategoriesTable from "@/components/dashboard/organization/CategoriesTable";
import EmployeesTable from "@/components/dashboard/organization/EmployeesTable";

export default function OrganizationPage() {

  const [activeTab, setActiveTab] =
    useState("Departments");

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Organization Setup
        </h1>

        <p className="text-slate-500 mt-2">
          Manage departments, asset categories and employees.
        </p>

      </div>

      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Departments" && (
        <DepartmentsTable />
      )}

      {activeTab === "Categories" && (
        <CategoriesTable />
      )}

      {activeTab === "Employees" && (
        <EmployeesTable />
      )}

    </div>
  );
}