type FooterProps = {
  children?: preact.ComponentChildren;
};
export default function Footer({ children }: FooterProps) {
  return (
    <footer className="footer mt-5 border">
      <div className="text-center text-muted footerContent">{children}</div>
    </footer>
  );
}
