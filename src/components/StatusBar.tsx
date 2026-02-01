export default function StatusBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-navy-dark border-b-2 border-white px-4 py-3 flex justify-between items-center text-xs md:text-sm z-[100] uppercase tracking-widest">
      <span className="animate-blink hidden sm:inline">System: Online</span>
      <span className="animate-blink">LOC: SL, UTC+5:30</span>
      <span className="animate-blink">GPA: 3.78</span>
      <span className="animate-blink text-accent">Status: Currently_Working</span>
    </div>
  );
}