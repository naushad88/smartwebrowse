'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Increment {
  _id: string;
  effectiveDate: string;
  oldTitle: string;
  newTitle: string;
  oldCTC: number;
  newCTC: number;
  notes: string;
  createdAt: string;
}

interface Document {
  _id: string;
  documentType: string;
  fileName: string;
  fileSize: number;
  uploadedAt: string;
  description: string;
}

// Utility function to format dates
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Increments Tab Component
function IncrementsTab({ employee }: { employee: Employee }) {
  const [increments, setIncrements] = useState<Increment[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    effectiveDate: '',
    oldTitle: employee.position,
    newTitle: '',
    oldCTC: employee.currentCTC,
    newCTC: '',
    notes: ''
  });

  useEffect(() => {
    fetchIncrements();
  }, [employee._id]);

  const fetchIncrements = async () => {
    try {
      const response = await fetch(`/api/emp-dashboard/increments?employeeId=${employee._id}`);
      const data = await response.json();
      if (data.success) {
        setIncrements(data.increments);
      }
    } catch (error) {
      console.error('Failed to fetch increments:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/emp-dashboard/increments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeId: employee._id,
          ...formData,
          newCTC: Number(formData.newCTC)
        })
      });

      const data = await response.json();
      if (data.success) {
        setShowAddForm(false);
        setFormData({
          effectiveDate: '',
          oldTitle: employee.position,
          newTitle: '',
          oldCTC: employee.currentCTC,
          newCTC: '',
          notes: ''
        });
        fetchIncrements();
        // Refresh employee data to get updated CTC
        window.location.reload();
      } else {
        alert('Failed to add increment: ' + data.error);
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Increment & Promotion History</h2>
          <p className="text-sm text-gray-600">Track salary increments and promotions for {employee.name}</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Increment
        </button>
      </div>
      
      {/* Current CTC Card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-green-800">Current CTC</h3>
            <p className="text-3xl font-bold text-green-900">₹{employee.currentCTC.toLocaleString()}</p>
            <p className="text-sm text-green-600">As of {formatDate(employee.dateOfJoining)}</p>
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fas fa-rupee-sign text-2xl text-green-600"></i>
          </div>
        </div>
      </div>

      {/* Add Increment Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Increment/Promotion</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Effective Date *</label>
                <input
                  type="date"
                  value={formData.effectiveDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, effectiveDate: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Title *</label>
                <input
                  type="text"
                  value={formData.newTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, newTitle: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New CTC (₹) *</label>
                <input
                  type="number"
                  value={formData.newCTC}
                  onChange={(e) => setFormData(prev => ({ ...prev, newCTC: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Increment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Increment History */}
      <div className="space-y-4">
        {increments.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No increments recorded yet</h3>
            <p className="text-gray-500 mb-4">Increment and promotion history will appear here once added.</p>
            <button 
              onClick={() => setShowAddForm(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
              <i className="fas fa-plus mr-2"></i>
              Add First Increment
            </button>
          </div>
        ) : (
          increments.map((increment) => (
            <div key={increment._id} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{increment.newTitle}</h4>
                  <p className="text-sm text-gray-600">{formatDate(increment.effectiveDate)}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">₹{increment.newCTC.toLocaleString()}</p>
                  {increment.oldCTC > 0 && (
                    <p className="text-sm text-gray-500">
                      From ₹{increment.oldCTC.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
              {increment.notes && (
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{increment.notes}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Documents Tab Component
function DocumentsTab({ employee }: { employee: Employee }) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadData, setUploadData] = useState({
    documentType: '',
    description: '',
    file: null as File | null
  });

  const documentTypes = [
    { value: 'offer-letter', label: 'Offer Letter', icon: 'fa-file-contract', color: 'blue' },
    { value: 'salary-slip', label: 'Salary Slip', icon: 'fa-file-invoice-dollar', color: 'green' },
    { value: 'increment-letter', label: 'Increment Letter', icon: 'fa-chart-line', color: 'purple' },
    { value: 'relieving-letter', label: 'Relieving Letter', icon: 'fa-file-signature', color: 'orange' },
    { value: 'other', label: 'Other HR Document', icon: 'fa-file-alt', color: 'indigo' }
  ];

  useEffect(() => {
    fetchDocuments();
  }, [employee._id]);

  const fetchDocuments = async () => {
    try {
      const response = await fetch(`/api/emp-dashboard/documents?employeeId=${employee._id}`);
      const data = await response.json();
      if (data.success) {
        setDocuments(data.documents);
      }
    } catch (error) {
      console.error('Failed to fetch documents:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        alert('Only PDF, JPG, and PNG files are allowed');
        return;
      }
      setUploadData(prev => ({ ...prev, file }));
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadData.file || !uploadData.documentType) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('employeeId', employee._id);
    formData.append('documentType', uploadData.documentType);
    formData.append('description', uploadData.description);
    formData.append('file', uploadData.file);

    try {
      const response = await fetch('/api/emp-dashboard/documents', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setShowUploadForm(false);
        setUploadData({ documentType: '', description: '', file: null });
        fetchDocuments();
        alert('Document uploaded successfully!');
      } else {
        alert('Failed to upload document: ' + data.error);
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getDocumentsByType = (type: string) => {
    return documents.filter(doc => doc.documentType === type);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Employee Documents</h2>
          <p className="text-sm text-gray-600">Manage documents for {employee.name}</p>
        </div>
        <button 
          onClick={() => setShowUploadForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
        >
          <i className="fas fa-upload mr-2"></i>
          Upload Document
        </button>
      </div>

      {/* Upload Form Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Document</h3>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Document Type *</label>
                <select
                  value={uploadData.documentType}
                  onChange={(e) => setUploadData(prev => ({ ...prev, documentType: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select document type</option>
                  {documentTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={uploadData.description}
                  onChange={(e) => setUploadData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Optional description..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File *</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG only. Max 5MB.</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || !uploadData.file || !uploadData.documentType}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Document Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {documentTypes.map((type) => {
          const typeDocs = getDocumentsByType(type.value);
          return (
            <div key={type.value} className={`bg-${type.color}-50 rounded-xl p-6 border border-${type.color}-200`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${type.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`fas ${type.icon} text-${type.color}-600`}></i>
                </div>
                <div>
                  <h3 className={`font-semibold text-${type.color}-900`}>{type.label}</h3>
                  <p className={`text-sm text-${type.color}-600`}>{typeDocs.length} documents</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedType(type.value);
                  setUploadData(prev => ({ ...prev, documentType: type.value }));
                  setShowUploadForm(true);
                }}
                className={`w-full px-3 py-2 bg-${type.color}-600 text-white rounded-lg hover:bg-${type.color}-700 transition-all duration-200 text-sm font-medium`}
              >
                <i className="fas fa-plus mr-1"></i>
                Add Document
              </button>
            </div>
          );
        })}
      </div>

      {/* Recent Documents */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Documents</h3>
        {documents.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-file text-3xl text-gray-400"></i>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No documents uploaded yet</h4>
            <p className="text-gray-500 mb-4">Upload documents to organize them by category and keep track of employee records.</p>
            <button 
              onClick={() => setShowUploadForm(true)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
            >
              <i className="fas fa-upload mr-2"></i>
              Upload First Document
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc._id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i className={`fas ${
                      doc.documentType === 'offer-letter' ? 'fa-file-contract' :
                      doc.documentType === 'salary-slip' ? 'fa-file-invoice-dollar' :
                      doc.documentType === 'increment-letter' ? 'fa-chart-line' :
                      doc.documentType === 'relieving-letter' ? 'fa-file-signature' :
                      'fa-file-alt'
                    } text-blue-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{doc.fileName}</h4>
                    <p className="text-sm text-gray-500">{formatFileSize(doc.fileSize)} • {formatDate(doc.uploadedAt)}</p>
                    {doc.description && (
                      <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-sm">
                    <i className="fas fa-download mr-1"></i>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface Employee {
  _id: string;
  employeeNo: string;
  name: string;
  dateOfBirth: string;
  contactNumber: string;
  address: string;
  dateOfJoining: string;
  department: string;
  position: string;
  employmentType: string;
  reportingManager: string;
  currentStatus: string;
  noticePeriod: number;
  dateOfRelieving?: string;
  currentCTC: number;
  profilePhoto?: string;
  idType: string;
  idNumber: string;
}

export default function EmployeeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Employee>>({});
  const [saving, setSaving] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (params.id) {
      fetchEmployee(params.id as string);
    }
  }, [params.id]);

  const fetchEmployee = async (id: string) => {
    try {
      const response = await fetch(`/api/emp-dashboard/employees/${id}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      const data = await response.json();
      if (data.success) {
        setEmployee(data.employee);
      } else {
        console.error('Failed to fetch employee:', data.error);
        setEmployee(null);
      }
    } catch (error) {
      console.error('Failed to fetch employee:', error);
      setEmployee(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Probation': return 'bg-yellow-100 text-yellow-800';
      case 'On Leave': return 'bg-blue-100 text-blue-800';
      case 'Resigned': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const startEditing = (section: string) => {
    setEditingSection(section);
    setEditData(employee || {});
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setEditData({});
  };

  const handleEditChange = (field: string, value: string | number) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = async () => {
    if (!employee) return;
    
    setSaving(true);
    try {
      let response;
      
      if (profileImage) {
        // If there's a new profile image, use FormData
        const formData = new FormData();
        
        // Add all edit data
        Object.entries(editData).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });
        
        // Add profile image
        formData.append('profileImage', profileImage);
        
        console.log('Uploading profile image:', profileImage.name, profileImage.size);
        console.log('FormData entries:');
        // Convert FormData entries to array for iteration
        const formDataArray = Array.from(formData.entries());
        formDataArray.forEach(([key, value]) => {
          console.log(`${key}:`, value);
        });
        
        response = await fetch(`/api/emp-dashboard/employees/${employee._id}`, {
          method: 'PUT',
          body: formData,
        });
      } else {
        // If no new image, use JSON
        console.log('No profile image, using JSON update');
        response = await fetch(`/api/emp-dashboard/employees/${employee._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editData),
        });
      }

      const data = await response.json();
      if (data.success) {
        setEmployee(data.employee);
        setEditingSection(null);
        setEditData({});
        setProfileImage(null);
        setProfileImagePreview(null);
      } else {
        alert('Failed to update employee: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!employee) return;
    
    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}? This action cannot be undone.`
    );
    
    if (!confirmed) return;
    
    setSaving(true);
    try {
      const response = await fetch(`/api/emp-dashboard/employees/${employee._id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        alert('Employee deleted successfully');
        router.push('/EmployerDashboard');
      } else {
        alert('Failed to delete employee: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }


  if (!employee) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <i className="fas fa-exclamation-triangle text-4xl text-red-500"></i>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-gray-900">Employee Not Found</h3>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The employee you're looking for doesn't exist or may have been deleted. 
          Please check the employee ID or return to the employee list.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => router.push('/EmployerDashboard')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Employees
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            <i className="fas fa-refresh mr-2"></i>
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                {employee.profilePhoto ? (
                  <img
                    src={employee.profilePhoto}
                    alt={employee.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-600 text-xl font-medium">
                    {employee.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{employee.name}</h1>
                <p className="text-gray-600">#{employee.employeeNo}</p>
                <p className="text-sm text-gray-500">{employee.position} • {employee.department}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex flex-col items-end space-y-3">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(employee.currentStatus)}`}>
                    {employee.currentStatus}
                  </span>
                </div>
                <button
                  onClick={handleDelete}
                  disabled={saving}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {saving ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Deleting Employee...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-trash mr-2"></i>
                      Delete Employee
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500">
                  Joined {formatDate(employee.dateOfJoining)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'profile', name: 'Profile', icon: '👤' },
              { id: 'job', name: 'Job & Payroll', icon: '💼' },
              { id: 'increments', name: 'Increments', icon: '📈' },
              { id: 'documents', name: 'Documents', icon: '📄' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === 'profile' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
              {editingSection !== 'profile' ? (
                <button
                  onClick={() => startEditing('profile')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-edit mr-2"></i>
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={cancelEditing}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 font-medium"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Cancel
                  </button>
                  <button
                    onClick={saveChanges}
                    disabled={saving}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                  >
                    {saving ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Saving...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save mr-2"></i>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                {editingSection === 'profile' ? (
                  <input
                    type="text"
                    value={editData.name || ''}
                    onChange={(e) => handleEditChange('name', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee Number</label>
                <p className="mt-1 text-sm text-gray-900">{employee.employeeNo}</p>
                <p className="text-xs text-gray-500">Employee number cannot be changed</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                {editingSection === 'profile' ? (
                  <input
                    type="date"
                    value={editData.dateOfBirth || ''}
                    onChange={(e) => handleEditChange('dateOfBirth', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">
                    {formatDate(employee.dateOfBirth)} ({calculateAge(employee.dateOfBirth)} years old)
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                {editingSection === 'profile' ? (
                  <input
                    type="tel"
                    value={editData.contactNumber || ''}
                    onChange={(e) => handleEditChange('contactNumber', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.contactNumber}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                {editingSection === 'profile' ? (
                  <textarea
                    value={editData.address || ''}
                    onChange={(e) => handleEditChange('address', e.target.value)}
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.address}</p>
                )}
              </div>
            </div>

            {/* Profile Picture Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-camera text-blue-600 mr-2"></i>
                Profile Picture
              </h3>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                  {profileImagePreview ? (
                    <img
                      src={profileImagePreview}
                      alt="Profile preview"
                      className="w-24 h-24 object-cover"
                    />
                  ) : employee.profilePhoto ? (
                    <img
                      src={employee.profilePhoto}
                      alt={employee.name}
                      className="w-24 h-24 object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-2xl font-medium">
                      {employee.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  {editingSection === 'profile' ? (
                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-medium"
                      >
                        <i className="fas fa-upload mr-2"></i>
                        {profileImage ? 'Change Image' : 'Upload Image'}
                      </button>
                      {profileImage && (
                        <p className="mt-2 text-sm text-green-600">
                          <i className="fas fa-check-circle mr-1"></i>
                          New image selected: {profileImage.name}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">
                        Supported formats: JPG, PNG, GIF. Max size: 5MB
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm text-gray-600">
                        {employee.profilePhoto ? 'Profile picture uploaded' : 'No profile picture'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Click "Edit Profile" to upload or change image
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'job' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
              {editingSection !== 'job' ? (
                <button
                  onClick={() => startEditing('job')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-medium"
                >
                  <i className="fas fa-edit mr-2"></i>
                  Edit Job Details
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={cancelEditing}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 font-medium"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Cancel
                  </button>
                  <button
                    onClick={saveChanges}
                    disabled={saving}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                  >
                    {saving ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Saving...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save mr-2"></i>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                {editingSection === 'job' ? (
                  <input
                    type="text"
                    value={editData.department || ''}
                    onChange={(e) => handleEditChange('department', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.department}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Position</label>
                {editingSection === 'job' ? (
                  <input
                    type="text"
                    value={editData.position || ''}
                    onChange={(e) => handleEditChange('position', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.position}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                {editingSection === 'job' ? (
                  <select
                    value={editData.employmentType || ''}
                    onChange={(e) => handleEditChange('employmentType', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Intern">Intern</option>
                  </select>
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.employmentType}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
                {editingSection === 'job' ? (
                  <input
                    type="text"
                    value={editData.reportingManager || ''}
                    onChange={(e) => handleEditChange('reportingManager', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.reportingManager}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Joining</label>
                {editingSection === 'job' ? (
                  <input
                    type="date"
                    value={editData.dateOfJoining || ''}
                    onChange={(e) => handleEditChange('dateOfJoining', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{formatDate(employee.dateOfJoining)}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Status</label>
                {editingSection === 'job' ? (
                  <select
                    value={editData.currentStatus || ''}
                    onChange={(e) => handleEditChange('currentStatus', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Active">Active</option>
                    <option value="Probation">Probation</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Resigned">Resigned</option>
                  </select>
                ) : (
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(employee.currentStatus)}`}>
                      {employee.currentStatus}
                    </span>
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Current CTC (₹)</label>
                {editingSection === 'job' ? (
                  <input
                    type="number"
                    value={editData.currentCTC || ''}
                    onChange={(e) => handleEditChange('currentCTC', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">₹{employee.currentCTC.toLocaleString()}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ID Type</label>
                {editingSection === 'job' ? (
                  <select
                    value={editData.idType || ''}
                    onChange={(e) => handleEditChange('idType', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Pan Card">Pan Card</option>
                    <option value="Aadhar Card">Aadhar Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">Driving License</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.idType}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ID Number</label>
                {editingSection === 'job' ? (
                  <input
                    type="text"
                    value={editData.idNumber || ''}
                    onChange={(e) => handleEditChange('idNumber', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.idNumber}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notice Period (Days)</label>
                {editingSection === 'job' ? (
                  <input
                    type="number"
                    value={editData.noticePeriod || ''}
                    onChange={(e) => handleEditChange('noticePeriod', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">{employee.noticePeriod} days</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Relieving</label>
                {editingSection === 'job' ? (
                  <input
                    type="date"
                    value={editData.dateOfRelieving || ''}
                    onChange={(e) => handleEditChange('dateOfRelieving', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-900">
                    {employee.dateOfRelieving ? formatDate(employee.dateOfRelieving) : 'Not applicable'}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'increments' && (
          <IncrementsTab employee={employee} />
        )}

        {activeTab === 'documents' && (
          <DocumentsTab employee={employee} />
        )}
      </div>
    </div>
  );
}
