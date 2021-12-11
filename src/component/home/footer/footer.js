import { ContentFooter } from "./cfooter/contentFooter";
import { TitleFooter } from "./tfooter/titleFooter";
import "./footer.sass";
import { FinallyFooter } from "./ffooter/finallyFooter";

export const Footer = () => {
  return (
    <div className="ffooter">
      <TitleFooter />
      <ContentFooter />
      <FinallyFooter />
    </div>
  );
};
