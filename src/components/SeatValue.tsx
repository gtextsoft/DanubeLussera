import RevealText from "./motion/RevealText";

const INCLUDES = [
  "A private consultation with a Danube sales advisor",
  "The full price list and floor plans for every project on show",
  "Your personal payment schedule, in AED and US dollars",
  "Golden Visa eligibility guidance",
  "Saturday’s morning masterclass on investing in Dubai property",
];

/** Event pricing frame: the seat is free, here is what it's worth. */
export default function SeatValue() {
  return (
    <section className="seat" aria-labelledby="seat-heading">
      <div className="container seat__grid">
        <div>
          <p className="eyebrow">What it costs to attend</p>
          <RevealText id="seat-heading" className="heading" lines={["Entry is entirely free.", "Your seat includes:"]} />
        </div>
        <div>
          <ul className="seat__list" role="list">
            {INCLUDES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="seat__scarcity">
            Registration is compulsory.
          </p>
          <a className="btn btn--solid" href="#register" data-magnetic>
            Book my private consultation
          </a>
        </div>
      </div>
    </section>
  );
}
