

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ Parv {year}</p>
    </footer>
  );
}

export default Footer;