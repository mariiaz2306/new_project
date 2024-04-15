import s from "./Map.module.css";

export default function Map() {
  return (
    <div className={s.map_div}>
      <iframe
        title="Google Map"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.720473617896!2d12.80091431595753!3d50.63107647950031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0b4d7854e0643%3A0xc016f7bb62a3b2d8!2z0KHQsNC80YHQutC40Lkg0LrQvtCy0LAsIDEsINCc0LjQvdGB0LosINCR0LXQutCw0L3QvtGB0YLRjCwgMDgyOTcsINCh0L7RgdGC0LLQvtC80LjQvNC-0YDQvtCz0L4sIDUxMDMx!5e0!3m2!1sru!2sru!4v1649282324091!5m2!1sru!2sru"
        loading="lazy"
      >
        <a href="https://www.maps.ie/population/">Population Estimator map</a>
      </iframe>
    </div>
  );
}
