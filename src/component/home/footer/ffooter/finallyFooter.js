import "./finallyFooter.sass";
export const FinallyFooter = () => {
  return (
    <div className="finally-footer">
      <div className="footer-detail">
        <div className="fdetail-item">Security</div>
        <div className="fdetail-item">Privacy</div>
        <div className="fdetail-item">Terms</div>
        <div className="fdetail-item main-detail-item">© Doist Inc.</div>
      </div>
      <div className="footer-lang">
        <select name="language" id="lang" className="lang-select">
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
          <option value="persian">Persian</option>
        </select>
      </div>
    </div>
  );
};
