import { NavBar } from "./NavBar";
import "./WebHeader.css";
import logo from "./Images/Logo.png";

export function WebHeader() {
  return (
    <header>
      <div id="CompanyHeader">
        <h1 id="CompanyName"> Business Class On Points</h1>
        <div id="Spacer"></div>
      </div>
      <NavBar />
    </header>
  );
}
