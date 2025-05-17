
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtomIcon, Square, Layers, ZapIcon } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-portfolio-green/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-40 w-48 h-48 border border-portfolio-orange/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
            <p className="text-lg text-portfolio-gray mb-8">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out. I'm always open to new challenges and collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-portfolio-green/10 rounded-lg">
                  <AtomIcon className="h-6 w-6 text-portfolio-green" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-portfolio-gray">chaitanya@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-portfolio-orange/10 rounded-lg">
                  <Square className="h-6 w-6 text-portfolio-orange" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-portfolio-gray">Remote / India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <ZapIcon className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Layers className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="futuristic-border">
            <form className="relative z-10 p-8 bg-portfolio-dark/90 rounded-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input id="name" className="bg-white/5 border-white/10 focus:border-portfolio-green/50" placeholder="Your name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" className="bg-white/5 border-white/10 focus:border-portfolio-green/50" placeholder="your.email@example.com" type="email" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" className="bg-white/5 border-white/10 focus:border-portfolio-green/50" placeholder="What would you like to discuss?" rows={6} />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-portfolio-green to-portfolio-orange hover:opacity-90">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
