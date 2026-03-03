import { Facebook, Instagram, Linkedin, Twitter, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#0f4ab0] dark:bg-[#082a66] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white text-[#0f4ab0] p-2 rounded-lg">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Vansh Web Studio</span>
            </div>
            <p className="text-blue-100 max-w-sm">
              We specialize in crafting high-converting websites that empower local businesses to achieve sustainable growth and scale online.
            </p>
            <div className="text-blue-100 space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:contact.vanshwebstudio@gmail.com" className="hover:text-white transition-colors">contact.vanshwebstudio@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Phone/WA:</span> 
                <a href="tel:+919877566380" className="hover:text-white transition-colors">+91-9877566380</a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f4ab0] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f4ab0] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f4ab0] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0f4ab0] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-blue-100 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Ready to scale your business?</h4>
            <p className="text-blue-100 mb-6">Transform your online presence today with our proven digital strategies.</p>
            <Button size="lg" className="bg-white text-[#0f4ab0] hover:bg-blue-50 font-bold rounded-xl w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Vansh Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
