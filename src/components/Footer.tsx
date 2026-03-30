import { Archive, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Archive className="h-6 w-6" />
              <span className="font-medium">Synthetic Voice Archive</span>
            </div>
            <p className="text-sm text-slate-300">
              Dedicated to preserving Virtual Voices before they're lost. 
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Browse Collections</a></li>
              <li><a href="#" className="hover:text-white">Search Archive</a></li>
              <li><a href="#" className="hover:text-white">Recent Additions</a></li>
              <li><a href="#" className="hover:text-white">Featured Voices</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contribute</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Submit a Voice</a></li>
              <li><a href="#" className="hover:text-white">Guidelines</a></li>
              <li><a href="#" className="hover:text-white">Support Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <p className="text-sm text-slate-300 mb-3">
              Get notified about new additions to the archive
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button variant="secondary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 Synthetic Voice Archive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
