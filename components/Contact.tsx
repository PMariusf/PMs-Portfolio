export default function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-white/20 bg-black/30 px-6 py-10 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-white/70 md:flex-row md:items-center md:justify-between">
        <p>Contact info</p>
        <a href="mailto:yourmail@example.com" className="hover:text-white">
          Mail: marius28@live.no
        </a>
        <a href="https://github.com/" className="hover:text-white">
          Github
        </a>
      </div>
    </footer>
  );
}