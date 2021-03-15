import React, { useState } from "react";
import Header from "../../components/Header";

const HeaderPage = ({ drawer, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Header
      handleDrawerToggle={handleDrawerToggle}
      mobileOpen={mobileOpen}
      container={container}
      drawer={drawer}
    />
  );
};

export default HeaderPage;
