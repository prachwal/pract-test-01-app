export default function Footer() {
  return (
    <footer className="footer mt-5 border">
      <div className="text-center text-muted footerContent">
        <p className="mb-2 text-sm footerText">
          Check out{' '}
          <a
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline footerLink"
          >
            create-preact
          </a>
          , the official Preact + Vite starter
        </p>
        <p className="m-0 text-sm footerText">Click on the Vite and Preact logos to learn more</p>
      </div>
    </footer>
  );
}