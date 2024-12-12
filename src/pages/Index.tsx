import { EmailCollector } from "@/components/EmailCollector";
import { Features } from "@/components/Features";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">Rima</h1>
          <Button variant="outline">Contact Us</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary animate-fadeIn">
            Your Health Data, Your Control
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            Rima empowers you with AI-driven health insights while ensuring your data remains secure and private.
          </p>
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <EmailCollector />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Rima
          </h2>
          <Features />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 Rima. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-secondary">Privacy</a>
            <a href="#" className="hover:text-secondary">Terms</a>
            <a href="#" className="hover:text-secondary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;