
import { Sidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="p-4">
        <ul>
          <li className="text-xl font-bold color-aqua"><Link to="/books">Books</Link></li>
          <li className="text-xl font-bold color-aqua"><Link to="/wishlist">Wishlist</Link></li>
        </ul>
      </div>
    </Sidebar>
  );
}

