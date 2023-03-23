import React from "react";
import { Footer } from "./Footer";
import { MainContent } from "./MainContent";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { LogoutModal } from "./LogoutModal";

export function Dashboard() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Topbar />
          <MainContent />
          <Footer />
        </div>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="Topbar">
        <i className="fas fa-angle-up"></i>
      </a>
      <LogoutModal />
    </div>
  );
}
