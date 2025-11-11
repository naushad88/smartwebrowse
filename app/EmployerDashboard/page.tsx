'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Employee {
  _id: string;
  employeeNo: string;
  name: string;
  department: string;
  position: string;
  currentStatus: 'Active' | 'Probation' | 'On Leave' | 'Resigned';
  dateOfJoining: string;
  profilePhoto?: string;
}

export default function DashboardPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    
    try {
      const response = await fetch('/api/emp-dashboard/employees', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      const data = await response.json();
      if (data.success) {
        setEmployees(data.employees);
      }
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.employeeNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || employee.currentStatus === statusFilter;
    const matchesDepartment = departmentFilter === 'All' || employee.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Probation': return 'bg-yellow-100 text-yellow-800';
      case 'On Leave': return 'bg-blue-100 text-blue-800';
      case 'Resigned': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDeleteEmployee = async (employeeId: string, employeeName: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${employeeName}? This action cannot be undone.`
    );
    
    if (!confirmed) return;
    
    try {
      const response = await fetch(`/api/emp-dashboard/employees/${employeeId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        alert('Employee deleted successfully');
        fetchEmployees(true); // Refresh the list
      } else {
        alert('Failed to delete employee: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Network error. Please try again.');
    }
  };

  const departments = Array.from(new Set(employees.map(emp => emp.department)));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600">Manage your team members and their information</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => fetchEmployees(true)}
            disabled={refreshing}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className={`fas fa-refresh mr-2 ${refreshing ? 'fa-spin' : ''}`}></i>
            {refreshing ? 'Refreshing...' : 'Refresh'}
          </button>
          <Link
            href="/EmployerDashboard/employees/new"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Add New Employee
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600 text-xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">{employees.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600 text-xl">✅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {employees.filter(emp => emp.currentStatus === 'Active').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <span className="text-yellow-600 text-xl">⏳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Probation</p>
              <p className="text-2xl font-bold text-gray-900">
                {employees.filter(emp => emp.currentStatus === 'Probation').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-blue-600 text-xl">🏢</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Departments</p>
              <p className="text-2xl font-bold text-gray-900">{departments.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name or employee ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Probation">Probation</option>
              <option value="On Leave">On Leave</option>
              <option value="Resigned">Resigned</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="All">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employee List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Employee List ({filteredEmployees.length})
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredEmployees.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-6xl">👥</span>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No employees found</h3>
              <p className="mt-2 text-gray-500">
                {searchTerm || statusFilter !== 'All' || departmentFilter !== 'All'
                  ? 'Try adjusting your filters'
                  : 'Get started by adding your first employee'
                }
              </p>
            </div>
          ) : (
            filteredEmployees.map((employee) => (
              <div key={employee._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-sm">
                      {employee.profilePhoto ? (
                        <img
                          src={employee.profilePhoto}
                          alt={employee.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-blue-600 text-xl font-semibold">
                          {employee.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900">{employee.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">#{employee.employeeNo}</p>
                      <p className="text-sm text-gray-600 mt-1">{employee.position} • {employee.department}</p>
                      <div className="flex items-center mt-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(employee.currentStatus)}`}>
                          {employee.currentStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Link
                      href={`/EmployerDashboard/employees/${employee._id}`}
                      className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <i className="fas fa-eye mr-2"></i>
                      View Details
                    </Link>
                    <button
                      onClick={() => handleDeleteEmployee(employee._id, employee.name)}
                      className="inline-flex items-center px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      title="Delete Employee"
                    >
                      <i className="fas fa-trash mr-2"></i>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
