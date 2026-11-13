import Reveal from './Reveal';

function SectionHeading({ index, eyebrow, title, highlight, description }) {
  return (
    <Reveal className="section-heading">
      <span className="section-eyebrow">
        <span className="eyebrow-index">{index}</span>
        {eyebrow}
      </span>
      <h2>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
      <span className="section-line" aria-hidden="true" />
    </Reveal>
  );
}

export default SectionHeading;
