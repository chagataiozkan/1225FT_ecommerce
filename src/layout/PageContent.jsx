import { Outlet } from "react-router-dom";

export default function PageContent() {
  return (
    <main className="flex-1">
      <Outlet />
    </main>
  );
}
