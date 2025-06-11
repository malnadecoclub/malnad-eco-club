import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      // Google Form submission
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeDzxqKli3oDSePYOEWbuXH1U36SD9AgD6AFN6jNytRx-uXAQ/formResponse";

      
      // Create form data to send
      const formSubmitData = new FormData();
      // Map your form fields to Google Form entry IDs
      formSubmitData.append("entry.2005620554", formData.name); // Name
      formSubmitData.append("entry.1045781291", formData.email); // Email
      formSubmitData.append("entry.1065046570", formData.message); // Message
  
      // Use no-cors mode since Google Forms doesn't support CORS for client-side submissions
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formSubmitData
      });
  
      // Since no-cors doesn't return readable response, we assume success if no error is thrown
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join our environmental mission? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interest in environmental activities or any questions you have..."
                      // Increased height from h-32 to h-48
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-48"
                      required
                    />
                  </div>
                  
                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-500/20 border border-green-500 rounded-md text-green-400">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-400">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div className="text-gray-300">ecoclubmalnad@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-medium text-white">Address</div>
                      <div className="text-gray-300">
                        Malnad College of Engineering<br />
                        Hassan, Karnataka, India
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rest of the component remains unchanged */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="space-y-4">
                  <a 
                    href="https://instagram.com/malnadecoclub" 
                    target="_blank"
                    className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    <span className="text-2xl"><i className="fa-brands fa-instagram"></i></span>
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm">@malnadecoclub</div>
                    </div>
                  </a>
                  <a 
                    href="https://twitter.com/MalnadEcoClub" 
                    target="_blank"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <span className="text-2xl"><i className="fa-brands fa-square-x-twitter"></i></span>
                    <div>
                      <div className="font-medium">Twitter</div>
                      <div className="text-sm">@MalnadEcoClub</div>
                    </div>
                  </a>
                  <a 
                    href="https://youtube.com/@malnadecoclub?si=OUiLBHlS0RwLRi4Whttps://youtube.com/@malnadecoclub?si=OUiLBHlS0RwLRi4W" 
                    target="_blank"
                    className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    <span className="text-2xl"><i className="fa-brands fa-youtube"></i></span>
                    <div>
                      <div className="font-medium">YouTube</div>
                      <div className="text-sm">@MalnadEcoClub</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/malnadecoclub/" 
                    target="_blank"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-2xl"><i className="fa-brands fa-linkedin"></i></span>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm">@malnadecoclub</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">🌍 Let's Build Tomorrow, Today</h3>
              <p className="text-green-50 mb-4">
                Join us in creating a sustainable future through innovative environmental initiatives and community engagement.
              </p>
              <a href="#events">
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Learn More About Our Impact
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
