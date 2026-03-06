import { Outlet } from 'react-router-dom';

export default function Template() {
  return (
    <div className="template-layout">
     <h1>Template</h1>
      <Outlet />
    </div>
  );
}
