/**
 * Fond galaxie du hero — nébuleuse floue animée (volute + nuages colorés + étoiles).
 * Composant serveur : pur CSS, aucun JS client. Se place dans un parent relative.
 */
export default function Galaxy() {
  return (
    <div aria-hidden className="galaxy">
      <div className="galaxy-swirl" />
      <div className="galaxy-blob b1" />
      <div className="galaxy-blob b2" />
      <div className="galaxy-blob b3" />
      <div className="galaxy-stars" />
    </div>
  );
}
