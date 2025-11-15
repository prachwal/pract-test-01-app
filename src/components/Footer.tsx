import { memo } from "preact/compat";

type FooterProps = {
  children?: preact.ComponentChildren;
};
function Footer({ children }: FooterProps) {
  return (
    <footer className="footer mt-5 border">
      <div className="text-center text-muted footerContent">{children}</div>
    </footer>
  );
}

export default memo(Footer);