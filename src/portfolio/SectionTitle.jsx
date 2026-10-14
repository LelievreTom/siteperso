export default function SectionTitle({ cmd }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold mb-8">
      <span className="text-term-green">$</span> <span className="text-white">{cmd}</span>
    </h2>
  );
}
