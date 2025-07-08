"use client"

import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-600 mb-4">Energy Saving Solutions</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Lower Your{" "}
                <span className="relative">
                  Energy Bills
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C60 2 140 2 198 10" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                with Solar Power
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Reliable, affordable, and sustainable solar solutions for homes and businesses.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Download Our free solar Guide
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                <Button variant="ghost" size="lg" className="text-white hover:bg-gray-700">
                  <Play className="w-12 h-12" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 mb-2">Our Results Speak for Us</p>
            <h2 className="text-3xl font-bold text-gray-900">So Far so Good...</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">7</div>
              <p className="text-gray-600">States Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">15 MWp</div>
              <p className="text-gray-600">Installed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25 homes</div>
              <p className="text-gray-600">Upgraded to solar</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">6,200 tons</div>
              <p className="text-gray-600">CO₂ saved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
              <p className="text-gray-600">Average Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">3-5 years</div>
              <p className="text-gray-600">payback</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-900 font-medium">Join Our list of Happy Clients</span>
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get A Quote</Button>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 mb-2">Our Commitment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reducing Energy Costs</h3>
                <p className="text-gray-600">
                  Our solar power systems help clients reduce their energy expenses by up to 30%, allowing them to
                  reinvest savings into business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ensuring Stable Power Supply</h3>
                <p className="text-gray-600">
                  With a 99% uptime, our solar solutions provide reliable electricity, eliminating disruptions caused by
                  power outages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Promoting Environmental Sustainability</h3>
                <p className="text-gray-600">
                  By reducing dependence on polluting diesel generators, we assist clients in cutting their carbon
                  emissions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm text-gray-600 mb-2">FAQ</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions we have been asked</h2>
              <p className="text-gray-600 mb-8">For Clarity and endures. Reach out to us</p>
              <Button variant="outline" className="border-gray-300 bg-transparent">
                Talk to Us
              </Button>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Can I speak to your customer Service?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, our customer service team is available to assist you with any questions or concerns you may
                    have.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Can I get a payment plan for your products
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We offer flexible payment plans to make solar energy accessible for everyone.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    What platforms and devices are compatible with Wiibi products?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our products are compatible with most standard electrical systems and can be monitored through
                    various platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Can I get a payment plan for your products
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, we provide various financing options to suit different budgets and requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Can I get a payment plan for your products
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our team will work with you to create a payment plan that fits your financial situation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex justify-center items-center space-x-4 mt-8">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
