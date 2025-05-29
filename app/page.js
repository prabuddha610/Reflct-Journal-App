import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title">Your Space to Reflct. <br/>Your Story to Tell.</h1>
        <p className="text-lg md:text-xl text-orange-800 mb-8">Capture your thoughts, track your moods, and reflect on your journey in a beautiful, secure space.</p>
      </div>
    </div>
  );
}
