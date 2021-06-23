export const ExtLink = ({ to, label, className }) => {
  return (
    <a
      className={className ? className : "vsc__link"}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
};

export const MailTo = ({ email, label, className }) => {
  return (
    <a className={className ? className : "vsc__link"} href={`mailto:${email}`}>
      {label ? label : email}
    </a>
  );
};

export const CallTo = ({ number, label, className }) => {
  return (
    <a className={className ? className : "vsc__link"} href={`tel:${number}`}>
      {label ? label : number}
    </a>
  );
};
