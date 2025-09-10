import DashboardLayout from '../layouts/DashboardLayout';
import ImageGrid from '../components/ImageGrid';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h2>Your Gallery</h2>
      <p>All your uploaded images.</p>
      <ImageGrid />
    </DashboardLayout>
  );
};

export default DashboardPage;