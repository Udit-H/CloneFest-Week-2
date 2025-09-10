import DashboardLayout from '../layouts/DashboardLayout';
import UploadForm from '../components/UploadForm';

const UploadPage = () => {
  return (
    <DashboardLayout>
      <h2>Upload a New Image</h2>
      <UploadForm />
    </DashboardLayout>
  );
};

export default UploadPage;